import Header from './components/Header.js'
import SearchPage from './components/SearchPage.js'
import UploadPage from './components/UploadPage.js'
import { useState } from 'react';
import { PAGE } from './settings';

function Page({ pageType }) {
  if (pageType === PAGE.UPLOAD)
    return <UploadPage />
  return <SearchPage />
}

function App() {
  const [activePage, setActivePage] = useState(PAGE.UPLOAD);

  const handlePageChange = (newPage) => {
    setActivePage(newPage);
  }

  return (
    <div className='all'>
      <Header activePage={activePage} onPageChange={handlePageChange} />
      <Page pageType={activePage}/>
    </div>
  );
}

export default App;
