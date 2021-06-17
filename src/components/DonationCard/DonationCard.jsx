import React from 'react'
import { useTranslation } from 'react-i18next'

export default function DonationCard() {
    const { t } = useTranslation()
    return (
            <div>
                {t('doncard.DC')}
                Donation Card
            </div>
            )}