import requests from '../../request';
import Hero from '../components/Hero';
import SectionRow from '../components/SectionRow'

function Main() {
  return (
    <section>
      <Hero />
      <SectionRow
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <SectionRow
        title='Trending Movies'
        fetchUrl={requests.fetchTrending}
      />
      <SectionRow
        title='Top Rated Movies'
        fetchUrl={requests.fetchTopRated}
      />
    </section>
  );
}

export default Main;


