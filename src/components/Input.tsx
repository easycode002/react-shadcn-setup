// import { Input as ShadcnInput } from '@shadcn/ui';
// import React from 'react';

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
//   className?: string;
// }

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ label, error, className, ...props }, ref) => {
//     return (
//       <div className="w-full">
//         {label && (
//           <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
//             {label}
//           </label>
//         )}
//         <ShadcnInput
//           ref={ref}
//           className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//             error ? 'border-red-500' : ''
//           } ${className}`}
//           {...props}
//         />
//         {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//       </div>
//     );
//   }
// );

// Input.displayName = 'Input';

// export default Input;