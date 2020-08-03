import {
    REQUEST_GET_TEMPLATES_PARAMS_LIST,
    REQUEST_GET_TEMPLATES_PARAMS_LIST_SUCCESS,
    REQUEST_GET_TEMPLATES_PARAMS_LIST_FAIL
} from '../../types';

const initState = {
    loadingTemplateParamsList: false,
    errorLoadingTemplateParamsLis: false,
    templateParamsList: []
};

export default (state = initState, action) => {
    switch (action.type) {
    case REQUEST_GET_TEMPLATES_PARAMS_LIST:
        return {
            ...state,
            loadingTemplateParamsList: true,
            errorLoadingTemplateParamsLis: false
        };

    case REQUEST_GET_TEMPLATES_PARAMS_LIST_SUCCESS:
        const { templateParamsList } = action.payload;

        return {
            ...state,
            loadingTemplateParamsList: false,
            errorLoadingTemplateParamsLis: false,
            templateParamsList
        };

    case REQUEST_GET_TEMPLATES_PARAMS_LIST_FAIL:
        return {
            ...state,
            loadingTemplateParamsList: false,
            errorLoadingTemplateParamsLis: true
        };
    }
    return state;
};
