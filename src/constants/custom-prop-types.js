import Type from 'prop-types';

export const error = Type.shape({
    name: Type.string,
    description: Type.string
});

export const userInfo = Type.shape({
    guid: Type.string.isRequired,
    fullName: Type.string.isRequired,
    shortName: Type.string.isRequired,
    email: Type.string.isRequired,
    phone: Type.string.isRequired,
    inn: Type.string.isRequired,
    firstInvoiceDate: Type.string.isRequired,
    type: Type.string.isRequired,
    edo: Type.bool.isRequired
});

export const element = Type.exact({
    nameTranslate: Type.string,
    name: Type.string.isRequired,
    type: Type.string.isRequired,
    value: Type.oneOfType([
        Type.string.isRequired,
        Type.array.isRequired
    ]),
    regexEncoded: Type.string,
    regex: Type.instanceOf(RegExp),
    header: Type.string,
    text: Type.string,
    errorText: Type.string,
    _settings: Type.exact({
        required: Type.bool,
        customErrorText: Type.string,
        visible: Type.bool.isRequired,
        disabled: Type.bool.isRequired,
        changeVisible: Type.array,
        changeDisabled: Type.array
    }),
    aruiOptions: Type.shape(),
    radioButtons: Type.arrayOf(Type.shape()),
    selectOptions: Type.arrayOf(Type.shape())
});

export const contract = Type.exact({
    id: Type.string.isRequired,
    regSign: Type.string.isRequired,
    brandAndModel: Type.string.isRequired,
    contractNumber: Type.string.isRequired,
    contractCreationDate: Type.string.isRequired
});
