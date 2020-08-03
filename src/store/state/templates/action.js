import {
    REQUEST_GET_TEMPLATES_PARAMS_LIST,
    REQUEST_GET_TEMPLATES_PARAMS_LIST_SUCCESS,
    REQUEST_GET_TEMPLATES_PARAMS_LIST_FAIL
} from '../../types';

export const getTemplateParamsList = () => ({
    type: REQUEST_GET_TEMPLATES_PARAMS_LIST
});

export const getTemplateParamsListSuccess = templateParamsList => ({
    type: REQUEST_GET_TEMPLATES_PARAMS_LIST_SUCCESS,
    payload: { templateParamsList }
});

export const getTemplateParamsListFail = () => ({
    type: REQUEST_GET_TEMPLATES_PARAMS_LIST_FAIL
});
