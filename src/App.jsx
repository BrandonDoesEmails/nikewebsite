import { 
  Nav, Hero, PopularProducts, SuperQuality, Services, 
  SpecialOffer, CustomerReviews, Subscribe, Footer 
} from './Sections'

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App
