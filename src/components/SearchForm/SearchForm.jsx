import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';

export default function SearchForm() {
  const [SearchQuery, setSearchQuery] = useState('')
  const [SelectOption, setSelectOption] = useState('All')
  const history = useHistory()


  const onSubmit = e => {
    history.push(`/searchresult?word=${SearchQuery}&select=${SelectOption}`)
    e.preventDefault()
  }
  
  const { t } = useTranslation()


  return (
    <form action="/searchresult" onSubmit={onSubmit}> 
      <div className="grid grid-cols-9 rounded-full border border-blue justify-center shadow-md hover:shadow-none transition duration-300 ease-in ">    
        <select onChange={e => setSelectOption(e.target.value)} className="bg-white pl-1 shadow py-2 rounded-l-full col-span-2 text-sm text-darkBlue focus:outline-none hover:bg-grey transition duration-300 ease-in">
          <option className="bg-white">{t('searchform.all')} </option>
          <option className="bg-white">{t('searchform.free')}</option>
          <option className="bg-white">{t('searchform.paid')}</option>
          <option className="bg-white">{t('footer.donated')}</option>
          <option className="bg-white">{t('footer.crafted')}</option>
          <option className="bg-white">{t('footer.used')}</option>
        </select>

        <input
          type="text"
          className="focus:outline-none pl-3 col-span-6 bg-pureWhite  text-center   text-xl "
          placeholder="Search"
          name="word"
          onInput={e => setSearchQuery(e.target.value)}
        />

        <button
          type="submit"
          className="bg-pureWhite text-darkBlue   text-xl rounded-r-full focus:outline-none hover:bg-grey transition duration-300 ease-in"
        >
          <FontAwesomeIcon icon="search-plus" className="p-1  " />
        </button>
      </div>
    </form>
  )
}
