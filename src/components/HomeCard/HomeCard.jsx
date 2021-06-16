import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HomeCard() {
    const { t } = useTranslation()
    return (
            <div>
            {t('navbar.home.')}
                Home
            </div>
            )}