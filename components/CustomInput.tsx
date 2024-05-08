import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up');

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormItem>
            <FormLabel className='form-label'>{label}</FormLabel>
            <div className='flex flex-col w-full'>
              <FormControl>
                <Input
                  placeholder={placeholder}
                  {...field}
                  type={name === 'password' ? 'password' : 'text'}
                  className='input-class'
                />
              </FormControl>
              <FormMessage className='form-message mt-2' />
            </div>
          </FormItem>
        </div>
      )}
    />
  );
};
export default CustomInput;
