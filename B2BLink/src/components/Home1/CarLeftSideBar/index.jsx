import React, { useState } from 'react'
import SelectComponent from '../../../utils/SelectComponent'
import styles from './CarLeftSidebar.module.css';
import ChoiceList from '../../common/ChoiceList/ChoiceList';
import ChoiceChip from '../../common/ChoiceChip/ChoiceChip';
import RangeSlider from '../../common/RangeSlider/RangeSlider';
import InputField from '../../common/InputField/InputField';
import { useTranslations } from 'next-intl';

function CarLeftSidebar({ brands, onBrandChange, models, onModelChange,
  sources, onSourceChange, cities, onCityChange, secteurs, onSecteurChange,
  chips, onChipChange, sliders, onSliderChange, onSearchClick }) {

  const t = useTranslations()

  return (
    <div className="col-xl-4 order-xl-1 order-2">
      <div className="filter-area mb-40">
        <div className="title-and-close-btn mb-20">
          <h6>Filtres de recherche:</h6>
          {/* <div className="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
              <path d="M7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14Z" />
              <path d="M4.06506 4.06506C4.1057 4.02431 4.15397 3.99199 4.20713 3.96993C4.26028 3.94788 4.31726 3.93652 4.37481 3.93652C4.43235 3.93652 4.48933 3.94788 4.54248 3.96993C4.59564 3.99199 4.64392 4.02431 4.68456 4.06506L6.99981 6.38118L9.31506 4.06506C9.35573 4.02438 9.40402 3.99211 9.45717 3.9701C9.51032 3.94808 9.56728 3.93675 9.62481 3.93675C9.68233 3.93675 9.73929 3.94808 9.79244 3.9701C9.84559 3.99211 9.89388 4.02438 9.93456 4.06506C9.97523 4.10573 10.0075 4.15402 10.0295 4.20717C10.0515 4.26032 10.0629 4.31728 10.0629 4.37481C10.0629 4.43233 10.0515 4.48929 10.0295 4.54244C10.0075 4.59559 9.97523 4.64388 9.93456 4.68456L7.61843 6.99981L9.93456 9.31506C9.97523 9.35573 10.0075 9.40402 10.0295 9.45717C10.0515 9.51032 10.0629 9.56728 10.0629 9.62481C10.0629 9.68233 10.0515 9.73929 10.0295 9.79244C10.0075 9.84559 9.97523 9.89388 9.93456 9.93456C9.89388 9.97523 9.84559 10.0075 9.79244 10.0295C9.73929 10.0515 9.68233 10.0629 9.62481 10.0629C9.56728 10.0629 9.51032 10.0515 9.45717 10.0295C9.40402 10.0075 9.35573 9.97523 9.31506 9.93456L6.99981 7.61843L4.68456 9.93456C4.64388 9.97523 4.59559 10.0075 4.54244 10.0295C4.48929 10.0515 4.43233 10.0629 4.37481 10.0629C4.31728 10.0629 4.26032 10.0515 4.20717 10.0295C4.15402 10.0075 4.10573 9.97523 4.06506 9.93456C4.02438 9.89388 3.99211 9.84559 3.9701 9.79244C3.94808 9.73929 3.93675 9.68233 3.93675 9.62481C3.93675 9.56728 3.94808 9.51032 3.9701 9.45717C3.99211 9.40402 4.02438 9.35573 4.06506 9.31506L6.38118 6.99981L4.06506 4.68456C4.02431 4.64392 3.99199 4.59564 3.96993 4.54248C3.94788 4.48933 3.93652 4.43235 3.93652 4.37481C3.93652 4.31726 3.94788 4.26028 3.96993 4.20713C3.99199 4.15397 4.02431 4.1057 4.06506 4.06506Z" />
            </svg> Tout effacer
          </div> */}
        </div>
      </div>
      <div className={`product-sidebar`}>
        <div className={`product-widget mb-20 ${styles.gradientBackground}`}>
          <div className="check-box-item">
            <h6 className="product-widget-title mb-20">{t("Labels.brand")}</h6>
            <div className="checkbox-container">
              <ChoiceList options={brands} onChoiceChange={onBrandChange} />
            </div>
          </div>
        </div>
        <div className={`product-widget mb-20 ${styles.gradientBackground}`}>
          <div className="check-box-item">
            <h6 className="product-widget-title mb-20">{t("Labels.model")}</h6>
            <div className="checkbox-container">
              <ChoiceList options={models} onChoiceChange={onModelChange} />
            </div>
          </div>
        </div>
        {sliders.map((slider, i) => (
          <div className={`product-widget mb-20 ${styles.gradientBackground}`}>
            <div className="check-box-item">
              <h6 className="product-widget-title mb-20">{t("Labels." + slider.label)}</h6>
              <div className="checkbox-container">
                <RangeSlider options={slider} onSliderChange={onSliderChange} />
              </div>
            </div>
          </div>
        ))}
        {chips.map((chip, i) => (
          <>
            <div className={`product-widget mb-20 ${styles.gradientBackground}`}>
              <div className="check-box-item">
                <h6 className="product-widget-title mb-20">{t("Labels." + chip.label)}</h6>
                <div className="checkbox-container">
                  <ChoiceChip options={chip} onChipChange={onChipChange} />
                </div>
              </div>
            </div>
          </>
        ))}

        <button className="primary-btn2" onClick={onSearchClick}>{t("Common.search")}</button>

      </div>
    </div>

  )
}


export default CarLeftSidebar