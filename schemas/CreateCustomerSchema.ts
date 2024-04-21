import { z } from "zod";
import customerListAtom from '@/data/customers';
import { useAtom } from "jotai";
    
export const CreateCustomerSchema = z.object({

    customer: z.string()
        .nonempty({ message: 'Customer name cannot be empty.' })
        .max(50, { message: 'Customer name must be less than 50 characters.' })
        .refine((value) => {    
            const [customers] = useAtom(customerListAtom);
            return !customers.some(row => row.includes(value));
        }, {message: 'Name already used.'}),
});

export type CreateCustomerType = z.infer<typeof CreateCustomerSchema>;

// Uncaught (in promise) Error: Invalid hook call. Hooks can only be called inside of the body of a function component.