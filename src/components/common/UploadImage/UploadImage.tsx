import React, {ChangeEvent, FC, useState} from 'react';
import { ReactComponent as UploadIcon } from './../../../assets/images/upload-image.svg'; // Путь к иконке
import s from './UploadImage.module.css'

type Props={
    onChange: (e: File)=> void
}
export const UploadWidget: FC<Props> = ({ onChange}) => {

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // if (e.target.files && e.target.files.length > 0) {
        //     setSelectedFile(e.target.files[0]);
        //     onChange(e.target.files[0])
        // }
        if (e.target.files!.length) {
            onChange(e.target.files![0])
                }
    };

    return (
        <div className={s.uploadWidget}>
            <label htmlFor="file-input" className={s.uploadButton}>
                <UploadIcon className={s.uploadIcon} />
            </label>
            <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                style={{ display: 'none' }}

            />
        </div>
    );
};


