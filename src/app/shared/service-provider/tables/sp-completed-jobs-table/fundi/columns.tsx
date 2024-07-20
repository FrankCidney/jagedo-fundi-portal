'use client';

import { HeaderCell } from '@/components/ui/table';
import { Text, Checkbox, ActionIcon, Tooltip, Select, Badge } from 'rizzui';
// import PencilIcon from '@/components/icons/pencil';
// import EyeIcon from '@/components/icons/eye';
// import DeletePopover from '@/app/shared/commons/delete-popover';
// import DateCell from '@/components/ui/date-cell';
// import { useState } from 'react';
// import { PiCheckCircleBold, PiPlusCircle } from 'react-icons/pi';
// import { last } from 'lodash';
import Link from 'next/link';
import { routes } from '@/config/routes';

// const statusOptions = [
//   { label: 'Live', value: 'Live' },
//   { label: 'Closed', value: 'Closed' },
// ];

type Columns = {
  data: any[];
  sortConfig?: any;
  handleSelectAll: any;
  checkedItems: string[];
  onDeleteItem: (id: string) => void;
  onHeaderCellClick: (value: string) => void;
  onChecked?: (id: string) => void;
};

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case 'unreviewed':
      return (
        <div className="flex items-center">
          <Badge color="warning" renderAsDot />
          <Text className="ms-2 font-medium text-orange-dark">{status}</Text>
        </div>
      );
    case 'reviewed':
      return (
        <div className="flex items-center">
          <Badge className="bg-gray-400" renderAsDot />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
    default:
      return (
        <div className="flex items-center">
          <Badge renderAsDot className="bg-gray-400" />
          <Text className="ms-2 font-medium text-gray-600">{status}</Text>
        </div>
      );
  }
}

// function returnAction(status: string) {
//     switch (status.toLowerCase()) {
//       case 'unreviewed':
//         return (
//             <Link href={'#'}>
//                 <Text className="text-sm text-green-600">Add Review</Text>
//             </Link>
//         );
//       case 'reviewed':
//         return (
//             <Link href={routes.serviceProvider.fundi.viewReview}>
//                 <Text className="text-sm text-green-600">View Reviews</Text>
//             </Link>
//         );
//       default:
//         return (
//             <Link href={routes.serviceProvider.fundi.viewReview}>
//                 <Text className="text-sm text-green-600">View Reviews</Text>
//             </Link>
//         );
//     }
//   }

export const getColumns = ({
  data,
  onChecked,
  sortConfig,
  checkedItems,
  onDeleteItem,
  handleSelectAll,
  onHeaderCellClick,
}: Columns) => [
  {
    title: <HeaderCell title="No." />,
    dataIndex: 'number',
    key: 'number',
    width: 50,
    render: (number: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {number}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="#" />,
    dataIndex: 'id',
    key: 'id',
    width: 50,
    render: (id: string) => (
    // <Text>#{id}</Text>
    <Text className="text-sm text-gray-900 dark:text-gray-700">
      #{id}
    </Text>
  ),
  },

  {
    title: <HeaderCell title="Date" className="uppercase" />,
    dataIndex: 'date',
    key: 'date',
    width: 100,
    render: (date: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {date}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Category" />,
    dataIndex: 'category',
    key: 'category',
    width: 100,
    render: (category: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {category}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Sub-category" />,
    dataIndex: 'subCategory',
    key: 'subCategory',
    width: 100,
    render: (subCategory: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {subCategory}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Request Type" />,
    dataIndex: 'requestType',
    key: 'requestType',
    width: 150,
    render: (requestType: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {requestType}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Description" />,
    dataIndex: 'description',
    key: 'description',
    width: 250,
    render: (description: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {description}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Location" />,
    dataIndex: 'location',
    key: 'location',
    width: 100,
    render: (location: string) => (
      <Text className="text-sm text-gray-900 dark:text-gray-700">
        {location}
      </Text>
    ),
  },

  {
    title: <HeaderCell title="Status" />,
    dataIndex: 'status',
    key: 'status',
    width: 100,
    render: (value: string) => getStatusBadge(value),
  },
  
  {
    // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
    title: <HeaderCell title="Action" />,
    dataIndex: 'status',
    key: 'action',
    width: 100,
    render: (requestType: string, row: any) => (
        <div className="gap-3 pe-3">        
          <Link href={routes.serviceProvider.fundi.completeJobDetails}>
            <Text className="text-sm text-green-600">View</Text>
          </Link>
        </div>
      ),
  },

//   render: (value: string) => returnAction(value),



  // {
  //   // Need to avoid this issue -> <td> elements in a large <table> do not have table headers.
  //   title: <HeaderCell title="Actions" />,
  //   dataIndex: 'action',
  //   key: 'action',
  //   width: 100,
  //   render: (_: string, row: any) => (
  //     <div className="flex items-center justify-end gap-3 pe-3">
  //       <Tooltip size="sm" content={'View'} placement="top" color="invert">
  //         <ActionIcon
  //           as="span"
  //           size="sm"
  //           variant="outline"
  //           aria-label={'View Appointment'}
  //           className="hover:!border-gray-900 hover:text-gray-700"
  //         >
  //           <EyeIcon className="h-4 w-4" />
  //         </ActionIcon>
  //       </Tooltip>
  //       {/* <DeletePopover
  //         title={`Remove User`}
  //         description={`Are you sure you want to remove this User?`}
  //         onDelete={() => onDeleteItem(row.id)}
  //       /> */}
  //     </div>
  //   ),
  // },
];

// function StatusSelect({ selectItem }: { selectItem?: string }) {
//   const selectItemValue = statusOptions.find(
//     (option) => option.value === selectItem
//   );
//   const [value, setValue] = useState(selectItemValue);
//   return (
//     <Select
//       dropdownClassName="!z-10"
//       className="min-w-[140px]"
//       inPortal={false}
//       placeholder="Select Role"
//       options={statusOptions}
//       value={value}
//       onChange={setValue}
//       displayValue={(option: { value: any }) =>
//         renderOptionDisplayValue(option.value as string)
//       }
//     />
//   );
// }

// function renderOptionDisplayValue(value: string) {
//   switch (value) {
//     case 'Closed':
//       return (
//         <div className="flex items-center">
//           <PiPlusCircle className="shrink-0 rotate-45 fill-red-dark text-lg" />
//           <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
//             {value}
//           </Text>
//         </div>
//       );
//     default:
//       return (
//         <div className="flex items-center">
//           <PiCheckCircleBold className="shrink-0 fill-green-dark text-lg" />
//           <Text className="ms-1.5 text-sm font-medium capitalize text-gray-700">
//             {value}
//           </Text>
//         </div>
//       );
//   }
// }
