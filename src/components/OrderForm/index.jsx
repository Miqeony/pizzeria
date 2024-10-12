import React, { useState } from 'react';
import './orderForm.css'

function OrderForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [comments, setComments] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validatePhone = (phoneNumber) => {
        const sanitizedPhone = phoneNumber.replace(/\D/g, '');
        if (sanitizedPhone.length !== 10) {
            setPhoneError('Номер телефону повинен містити  10 цифр.');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (phoneError) {
            alert('Будь ласка, введіть правильний номер телефону.');
            return;
        }

        alert('Замовлення підтверджено!');
    };

    return (
        <div className="order-container">
            <form className="order-form" onSubmit={handleSubmit}>
                <h2>Оформлення замовлення</h2>
                <div className="form-group">
                    <label>Ім'я та Фамілія :</label>
                    <input
                        type="text"
                        value={name}
                        placeholder="введіть ваше ім'я"
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Номер телефону:</label>
                    <input
                        type="text"
                        value={phone}
                        placeholder="000-000-00-00"
                        onChange={(e) => {
                            setPhone(e.target.value);
                            validatePhone(e.target.value);
                        }}
                        required
                        className="input-field"
                    />
                    {phoneError && <p className="error-message">{phoneError}</p>}
                </div>
                <div className="form-group">
                    <label>Адреса доставки:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="form-group">
                    <label>Коментарі:</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="textarea-field"
                    />
                </div>
                <button type="submit" className="submit-button">Підтвердити замовлення</button>
            </form>
        </div>
    );
}

export default OrderForm;
