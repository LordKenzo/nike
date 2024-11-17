# React + Vite

https://kinsta.com/knowledgebase/react-must-be-in-scope-when-using-jsx/
https://github.com/MetroStar/comet-starter/blob/d4e97fb56a73f61656d2cd23eca158772d8d1429/eslint.config.js
https://medium.com/@oliviarizona/eslint-flat-config-e94d4bd11525

# Introduzione a Tailwind CSS

Utilizza il playground: https://play.tailwindcss.com/

- che differenza c'è tra `max-sm:text-2xl` e `sm:text-2xl` in tailwind?

`sm:text-2xl`

Significato: Questa classe indica che a partire da schermi con larghezza minima di 640px (breakpoint sm), il testo avrà una dimensione di 2xl. In altre parole, su schermi più grandi di 640px, il testo verrà ingrandito.

`max-sm:text-2xl`

Significato: Questa classe è un po' meno comune e potrebbe non essere supportata in tutte le versioni di Tailwind. In teoria, dovrebbe indicare che fino a una larghezza massima di 640px (breakpoint sm), il testo avrà una dimensione di 2xl.

Esempio:

```html

```

<section class="bg-slate-300 sm:bg-red-400 p-4 "></section>
<section class="bg-slate-300 sm:bg-yellow-400 p-4"></section>

<section class="bg-slate-300 max-sm:bg-red-400 p-4 "></section>
<section class="bg-slate-300 max-sm:bg-yellow-400 p-4"></section>
```

Ora è chiaro un codice del tipo:

```
text-3xl: Questa classe applica una dimensione di testo di 3xl all'elemento h1. Questa sarà la dimensione di default per tutti gli schermi.
sm:text-4xl: Questa classe applica una dimensione di testo di 4xl a partire da schermi con larghezza minima di 640px (breakpoint sm).
md:text-5xl: Questa classe applica una dimensione di testo di 5xl a partire da schermi con larghezza minima di 768px (breakpoint md).
```

- Cosa significa `container` e `mx-auto`?

Quando scrivi <div class="container mx-auto">, stai creando un contenitore che:

Ha una larghezza massima: Si adatta alle diverse dimensioni dello schermo, evitando che il contenuto diventi troppo largo.
È centrato: Grazie a `mx-auto`, il contenitore sarà sempre posizionato al centro della pagina, indipendentemente dalla sua larghezza.

Esempio:

```html
<div
  class="container mx-auto my-3 py-3 px-1 bg-slate-200 border-[1px] border-black"
>
  <h1>Ciao</h1>
</div>
```

- Se incontro la regola `flex flex-1` cosa vuol dire?

`flex`: Questa classe applica il modello di layout flexbox all'elemento. Ciò significa che i figli diretti di questo elemento diventeranno flex item, e possono essere disposti in modo flessibile all'interno del contenitore. Posso abbinare la regola `flex-wrap` per mandare a capo le righe nel momento in cui lo spazio diventa troppo piccolo.

`flex-1`: Questa classe indica che l'elemento dovrebbe occupare tutto lo spazio disponibile all'interno del suo contenitore flex, crescendo o restringendosi in base alle necessità. In altre parole, questo elemento si "estenderà" per riempire qualsiasi spazio vuoto all'interno del contenitore. La regola `flex-1` può essere combinato con altre utility come `basis`, `grow`, e `shrink` per un controllo più fine sul comportamento degli elementi flex.

`flex-row`: posiziona gli elementi sulla riga
`flex-col`: posiziona gli elementi in colonna:
`xl:flex-row flex-col`: per display con almeno 1280px andiamo a posizionare gli elementi in riga (uno di fianco all'altro) altrimenti per colonna
`justify-center`: vado a centrare rispetto l'asse y gli elementi, provalo con un `min-h-screen`
`gap`: inserisce uno spazio tra gli elementi del flex container

Esempio:

```html
<div class="flex">
  <div class="bg-blue-500 flex-1">Elemento 1</div>
  <div class="bg-green-500 flex-1">Elemento 2</div>
  <div class="bg-red-500 flex-1">Elemento 3</div>
</div>
```

Se ridimensioni la finestra del browser, gli elementi si adatteranno automaticamente per mantenere la divisione equa dello spazio.

```html
<div class="flex flex-wrap">
  <div class="bg-blue-500 flex-1 p-14">Colonna 1</div>
  <div class="bg-green-500 flex-1 p-14">Colonna 2</div>
  <div class="bg-red-500 flex-1 p-14">Colonna 3</div>
</div>
```

Esempio:

```html
<section
  id="home"
  class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2"
>
  <div class="bg-cyan-50">Hero</div>
  <p>Container hero</p>
</section>
```

dove `max-container` in questo caso è una regola custom che definisce la larghezza massima del contenitore posizionando gli elementi al centro e sarà così scritta:

```html
@layer components { .max-container{ max-width: 1440px; margin: 0 auto; } }
```

se usi il playground inserisci nella sezione **CSS**.

- Un esempio più complesso?

```html
<section
  id="home"
  class="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2"
>
  <div
    class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 border-2 border-red-500"
  >
    <p>Our summer collection</p>
    <h1><span>The new arrival</span><br /><span>Nike</span>shoes</h1>
    <p>
      Discover stylish Nike arrivals, quality comfort, and innovation for your
      active life.
    </p>
  </div>
</section>
```
