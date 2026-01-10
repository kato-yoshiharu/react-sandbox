import {
  type FieldValues,
  type UseFormProps,
  type UseFormReturn,
  useForm
} from "react-hook-form";

export const useCustomForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues
>(
  props?: UseFormProps<TFieldValues, TContext, TTransformedValues>
): UseFormReturn<TFieldValues, TContext, TTransformedValues> => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    ...props
  });
  return methods;
};
