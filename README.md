# React + Vite

https://kinsta.com/knowledgebase/react-must-be-in-scope-when-using-jsx/
https://github.com/MetroStar/comet-starter/blob/d4e97fb56a73f61656d2cd23eca158772d8d1429/eslint.config.js
https://medium.com/@oliviarizona/eslint-flat-config-e94d4bd11525

## Configurazioni

Alcune configurazioni custom sono in `index.css` e altre in `tailwind.config.js`.

## SVG Pattern Generator

[SVG Background](https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/)

## Introduzione a Tailwind CSS

Utilizza il playground: https://play.tailwindcss.com/

- che differenza c'è tra `max-sm:text-2xl` e `sm:text-2xl` in tailwind?

`sm:text-2xl`

Significato: Questa classe indica che a partire da schermi con larghezza minima di 640px (breakpoint sm), il testo avrà una dimensione di 2xl. In altre parole, su schermi più grandi di 640px, il testo verrà ingrandito.

`max-sm:text-2xl`

Significato: Questa classe è un po' meno comune e potrebbe non essere supportata in tutte le versioni di Tailwind. In teoria, dovrebbe indicare che fino a una larghezza massima di 640px (breakpoint sm), il testo avrà una dimensione di 2xl.

```html
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

## Breakpoint Tailwind CSS

| Breakpoint prefix | Minimum width | CSS                                |
| ----------------- | ------------- | ---------------------------------- |
| sm                | 640px         | @media (min-width: 640px) { ... }  |
| md                | 768px         | @media (min-width: 768px) { ... }  |
| lg                | 1024px        | @media (min-width: 1024px) { ... } |
| xl                | 1280px        | @media (min-width: 1280px) { ... } |
| 2xl               | 1536px        | @media (min-width: 1536px) { ... } |

## Hero Section

L'Hero Section è contenuta in:

```html
<section className="xl:padding-l wide:padding-r padding-b">
  <Hero />
</section>
```

La classe della section prende delle custom definite in `index.css`:

```css
.padding-l {
  @apply sm:pl-16 pl-8;
}
.padding-r {
  @apply sm:pr-16 pr-8;
}
.padding-b {
  @apply sm:pb-24 pb-12;
}
```

la prima regola applica un padding left di 2rem (pl-8) per device piccoli e superiori e un padding left di 4rem (pl-16) per device medi e superiori (sm)
Le altre regole ugulamente per padding right e per padding bottom.

Pertanto la regola `xl:padding-l wide:padding-r padding-b` richiama `padding-l` solo per schermi xl

la regola `wide` è custom e riportata in `tailwind.config.js`:

```css
screens: {
  wide: '1440px',
},
```

Il componente Hero è una `section` diviso da 2 `div`, il primo conterrà del testo e un pulsante, il secondo conterrà la Hero Image e 3 thumbnails cliccabili che sostituiscono l'Hero Image.

La `section` è un contenitore `flex`:

- `w-full`: Imposta la larghezza dell'elemento al 100% del contenitore padre.
- `flex`: Applica il display flex all'elemento.
- `xl:flex-row`: Dispone i figli dell'elemento in una riga (flex-row) per schermi xl (1280px) o superiori.
- `flex-col`: Dispone i figli dell'elemento in una colonna (flex-col) per schermi più piccoli di xl.
- `justify-center`: Centra i figli dell'elemento orizzontalmente.
- `min-h-screen`: Imposta l'altezza minima dell'elemento al 100% dell'altezza della finestra.
- `gap-10`: Imposta uno spazio (gap) di 2.5rem (40px) tra i figli dell'elemento.
- `max-container`: Classe personalizzata che trovi in `index.css` e che imposta la larghezza massima del contenitore.

Vediamo le regole del primo `div`:

- `xl:w-2/5`: Imposta la larghezza dell'elemento al 40% (2/5) per schermi xl (1280px) o superiori.
- `flex`: Applica il display flex all'elemento.
- `flex-col`: Dispone i figli dell'elemento in una colonna (flex-direction: column).
- `justify-center`: Centra i figli dell'elemento verticalmente lungo l'asse principale.
- `items-start`: Allinea i figli dell'elemento all'inizio lungo l'asse trasversale.
- `w-full`: Imposta la larghezza dell'elemento al 100% del contenitore padre.
- `max-xl:padding-x`: Classe personalizzata che applica padding orizzontale per schermi più piccoli di xl.
- `pt-28`: Imposta un padding-top di 7rem (112px).

Nel secondo `div` è importante l'impostazione di `relative` in quanto un elemento figlio ha la posizione ad `absolute`.
Questo `div` ha al suo interno un ulteriore `div` e un `img`

L'`img` ha le seguenti regole: `object-contain z-10`:

- `object-contain`: Imposta la proprietà object-fit: contain sull'elemento, facendo sì che il contenuto dell'elemento (come un'immagine o un video) si adatti all'interno del contenitore mantenendo le proporzioni.
- `z-10`: Imposta la proprietà z-index dell'elemento a 10, determinando l'ordine di sovrapposizione rispetto ad altri elementi.

Mentre il `div` ha:

- `flex`: Applica il display flex all'elemento.
- `sm:gap-6`: Imposta uno spazio (gap) di 1.5rem (24px) tra i figli dell'elemento per schermi sm (640px) o superiori.
- `gap-4`: Imposta uno spazio (gap) di 1rem (16px) tra i figli dell'elemento per schermi più piccoli di sm.
- `absolute`: Imposta la proprietà position: absolute sull'elemento, permettendo di posizionarlo in modo assoluto rispetto al suo contenitore posizionato.
- `-bottom-[5%]`: Posiziona l'elemento 5% dal fondo del contenitore, con un valore negativo che lo sposta verso l'alto.
- `sm:left-[10%]`: Posiziona l'elemento 10% da sinistra per schermi sm (640px) o superiori.
- `max-sm:px-6`: Probabilmente una classe personalizzata che applica un padding orizzontale di 1.5rem (24px) per schermi più piccoli di sm.

Ora vediamo la gestione della selezione delle thumbnails. L'array contiene le immagini della thumbnail e dell'immagine vera e propria, la struttura quindi ha 2 campi `bigShoe` e `thumbnail` . Il componente che rappresenta la card della scarpa (ShoeCard) accetta 3 parametri: l'oggetto (shoe), l'handler per cambiare l'immagine Hero e il valore corrente dell'immagine Hero. In questo modo possiamo impostare, grazie allo useState Hook il valore della selezione.
Il componente vede un `div` che contiene un ulteriore `div` e la `img` della thumbnail. Il primo `div` serve per creare il bordo dell'immagine selezionata e creare un effetto zoom. Se il `currentHeroImage === shoe.bigShoe` allora il bordo sarà attivato. Se clicco allora verifico la condizione `if` ed eventualmente imposto il nuovo valore corrente: `changeBigShoeImage(shoe.bigShoe)`
