import cls from './FormControls.module.css';
// import {required} from "../../../utils/validators/validators";
import { Field } from 'redux-form';

// const FormControl = ({ input, meta, ...props }) => {
const FormControl = ({ input, meta: { touched, error }, ...props }) => {
    // const hasError = meta.touched && meta.error;
    const hasError = touched && error;
    return (
        <div className={ cls.formСontrol + (hasError ? ' ' + cls.error : '') }>
            <div>
                { props.children }
            </div>
            {/*{ hasError && <span>{ meta.error }</span> }*/}
            { hasError && <span>{ error }</span> }
        </div>
    );
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl { ...props }>
            <textarea { ...input } { ...restProps } />
        </FormControl>
    );
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return (
        <FormControl { ...props }>
            <input { ...input } { ...restProps } />
        </FormControl>
    );
}

// export const Input = ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={ cls.formСontrol + (hasError ? ' ' + cls.error : '') }>
//             <div>
//                 <input { ...input } { ...props } />
//             </div>
//             { hasError && <span>{ meta.error }</span> }
//         </div>
//     );
// }

export const createField = (name, placeholder, validators, component, props = {}, text = '') => {
    return (
        <div>
            <Field
                component={ component }
                name={name }
                placeholder={ placeholder }
                validate={ validators }
                { ...props }
            /> { text }
        </div>
    )
};