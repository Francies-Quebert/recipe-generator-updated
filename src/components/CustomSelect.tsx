import Select, { Option, SelectProps, } from 'rc-select'
import '../styles/rc-select.less';


function CustomSelect(props: SelectProps) {

    return (
        <Select
            {...props}
        />
    )
}

export default CustomSelect