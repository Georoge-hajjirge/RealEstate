import React from "react";
import InputField from "../../atoms/InputField";

interface PropertyAddressFormProps {
  address: { street: string; city: string; state: string; zipcode: string; country: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PropertyAddressForm: React.FC<PropertyAddressFormProps> = ({ address, onChange }) => {
  return (
    <div>
      <InputField label="Street Address" type="text" name="street" value={address.street} onChange={onChange} />
      <InputField label="City" type="text" name="city" value={address.city} onChange={onChange} />
      <InputField label="State" type="text" name="state" value={address.state} onChange={onChange} />
      <InputField label="Zip Code" type="text" name="zipcode" value={address.zipcode} onChange={onChange} />
      <InputField label="Country" type="text" name="country" value={address.country} onChange={onChange} />
    </div>
  );
};

export default PropertyAddressForm;
