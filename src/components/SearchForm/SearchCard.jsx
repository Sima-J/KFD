import React from 'react'
import { FormControl, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './SearchCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchCard() {
  const { t } = useTranslation()
    return (
            <Form inline className="input-group search-box border border-dark  ">

              <FormControl type="text" placeholder= {t('addbutton.search')} className="mr-sm-2" />
              <span className="input-group-addon  border-left border-dark  bg-white">
                <FontAwesomeIcon className="SIcons" icon="search" />
              </span>

            </Form>
          )}