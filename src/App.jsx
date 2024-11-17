import Nav from './components/Nav'
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './sections'
const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b bg-red-200">
      <Hero />
    </section>
    <section className="padding bg-pale-blue">
      <PopularProducts />
    </section>
    <section className="padding bg-red-200">
      <SuperQuality />
    </section>
    <section className="padding-x py-10 bg-pale-blue">
      <Services />
    </section>
    <section className="padding bg-red-200">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full bg-red-200">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
      <Footer />
    </section>
  </main>
)
export default App
