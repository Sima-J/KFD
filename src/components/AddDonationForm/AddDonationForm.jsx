import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AddDonationForm() {
    const { t } = useTranslation()
    return (
                <div>
                {t("adddonation.addnewdon")}
                </div>
            )}