import { PAGE } from '../settings'

function Header({ activePage, onPageChange }) {
  const handleButtonClick = (pageType) => {
    onPageChange(pageType);
  }

  return (
    <div className='header'>
      <div className='big-text'>
        <div>EliteChef</div>
        <div>Recipies</div>
      </div>
      <div className='padding-small'>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked={activePage === PAGE.UPLOAD} onChange={() => handleButtonClick(PAGE.UPLOAD)}/>
          <label class="btn btn-outline-primary" for="btnradio1">Upload Recipe</label>
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked={activePage === PAGE.SEARCH} onChange={() => handleButtonClick(PAGE.SEARCH)} />
          <label class="btn btn-outline-primary" for="btnradio2">Search</label>
        </div>
      </div>
      <hr className='horizontal-line'/>
    </div>
  )
}

export default Header;
