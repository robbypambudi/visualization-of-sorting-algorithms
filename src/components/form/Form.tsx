import * as React from 'react';
import {
  DeepPartialSkipArrayKey,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
  useWatch,
} from 'react-hook-form';

type FormProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  setSubscriptions?: React.Dispatch<DeepPartialSkipArrayKey<FieldValues>>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  className?: string;
} & UseFormProps<TFormValues>;

const Form = <TFormValues extends Record<string, unknown>>({
  onSubmit,
  children,
  className,
  setSubscriptions,
  ...rest
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>(rest);

  const subs = useWatch({
    control: methods.control,
  });

  React.useMemo(() => {
    function run() {
      setSubscriptions?.(subs);
    }
    setSubscriptions && run();
  }, [setSubscriptions, subs]);

  return (
    <div className={className}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children(methods)}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
