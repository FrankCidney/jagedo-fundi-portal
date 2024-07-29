import { QuoteInput } from "./quote-forms/quote-input";
import { Text } from 'rizzui';
import { useFormContext } from 'react-hook-form';

const TotalsBlock = () => {
    const { register } = useFormContext();

    return (  
        <>
        <div className="group grid grid-cols-2 gap-0 border-b border-muted dark:border-muted/20 mt-12">
            <div className="col-span-1 p-2">
                <Text className='text-center font-semibold text-gray-500'>Total Expenses Cost</Text>
            </div>
            <div className="col-span-1 p-2">
                <QuoteInput
                inputClassName="[&_input]:text-center"
                placeholder="total"
                {...register(`totalExpensesCost`)}
                />
            </div>    
        </div>
        <div className="group grid grid-cols-2 gap-0 border-b border-muted dark:border-muted/20">
            <div className="col-span-1 p-2">
                <Text className='text-center font-semibold text-gray-500'>Grand Total</Text>
            </div>
            <div className="col-span-1 p-2">
                <QuoteInput
                inputClassName="[&_input]:text-center"
                placeholder="total"
                {...register(`grandTotal`)}
                />
            </div>    
        </div>
        </>
    );
}
 
export default TotalsBlock;