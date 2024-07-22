import Multiselect from 'multiselect-react-dropdown';

const MultiselectCollapse = () => {
    return ( 
        <Multiselect
            displayValue="key"
            hideSelectedList
            onKeyPressFn={function noRefCheck(){}}
            onRemove={function noRefCheck(){}}
            onSearch={function noRefCheck(){}}
            onSelect={function noRefCheck(){}}
            options={[
                {
                cat: 'Group 1',
                key: 'Option 1'
                },
                {
                cat: 'Group 1',
                key: 'Option 2'
                },
                {
                cat: 'Group 1',
                key: 'Option 3'
                },
            ]}
            showCheckbox
            />
     );
}
 
export default MultiselectCollapse;