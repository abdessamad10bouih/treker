import React, { useState } from 'react'
import { Check, Search } from 'lucide-react';
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function PlannerForm({ form, submitFun }) {
    const [formData, setFormData] = useState({
        date: '',
        location: '',
        nextDestination: '',
        numAdults: 1,
        numChildren: 0,
        budget: 0,
        remarks: ''
    })



    const changer = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        form(formData)
    }
    return (
        <form action='' className="w-full h-full gap-10 flex flex-col items-center px-5" onSubmit={submitFun}>
            <Space className='w-full h-16' value={formData.date} onChange={changer} direction="vertical" size={12}>
                <RangePicker onChange={(dates, dateStrings) => {
                    setFormData({
                        ...formData,
                        date: dateStrings.join(' / '),
                    });
                    form({ ...formData, date: dateStrings });
                }} disabledDate={(date) => date && date.valueOf() < Date.now()} className='w-full h-12 text-primary border-2 border-primary outilne-none rounded' />
            </Space>
            <Input name="location" header="Localisation" type="text" icon={<Search />} value={formData.location} onChange={changer} />
            <Input
                name="nextDestination"
                header="Prochain Destination"
                type="text"
                value={formData.nextDestination}
                onChange={changer}
            />            <div className='w-full h-16 flex items-center gap-5 justify-center'>
                <Input min={1} name={"numAdults"} header="Nombre d'adultes" type="number" value={formData.numAdults} onChange={changer} />
                <Input name={"numChildren"} header="Nombre d'enfants" type="number" value={formData.numChildren} onChange={changer} />
            </div>
            <Input name={"budget"} header="Budget" type="number" value={formData.budget} onChange={changer} />
            <div className="w-full relative flex items-center gap-5 justify-center">
                <h1 className='absolute left-4 -top-1 bg-white text-secondary px-2'>Remarks</h1>
                <textarea
                    name="remarks"
                    cols="10"
                    rows="15"
                    className='w-full p-10 text-primary border-2 border-primary h-full px-3 outline-none rounded'
                    value={formData.remarks}
                    onChange={changer}
                />
            </div>
            <button type="submit" className='w-[60%] h-16 font-semibold rounded-full border-2 border-secondary bg-secondary text-white'>
                Planifiez votre voyage Maintenant
            </button>
        </form>
    )
}

export default PlannerForm

const Input = ({ children, type, header, name, icon, value, onChange, min }) => {
    return (
        <div className="w-full h-16 relative flex items-center gap-5 justify-center">
            <h1 className='absolute left-4 -top-2 bg-white text-secondary px-2'>{header}</h1>
            <div className='w-full rounded border-2 border-primary h-12 gap-3 flex items-center justify-center px-3'>
                {icon}
                <input
                    type={type}
                    name={name}
                    min={min}
                    required
                    placeholder={children}
                    className='w-full text-primary h-full px-3 outline-none rounded'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
