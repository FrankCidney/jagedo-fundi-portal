'use client';

import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
} from 'recharts';
import { useState } from 'react';
import { DatePicker } from '@/components/ui/datepicker';
import WidgetCard from '@/components/cards/widget-card';
import { CustomTooltip } from '@/components/charts/custom-tooltip';

const data = [
  {
    group: 'Fundis',
    number: 8,
  },
  {
    group: 'Professionals',
    number: 5,
  },
  {
    group: 'Contractors',
    number: 11,
  },
  {
    group: 'Customers',
    number: 17,
  },
];

export default function SummaryWidget({ className }: { className?: string }) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const handleChange = ([newStartDate, newEndDate]: [
    Date | null,
    Date | null,
  ]) => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <WidgetCard
      rounded="lg"
      className={className}
      title="Summary"
      descriptionClassName="text-gray-500 mt-1.5"
      description={
        <div className="flex items-center gap-2">
          <span>Service Providers and Customers: </span>
          {/* <DatePicker
            dateFormat="yyyy"
            placeholderText="Select Year"
            maxDate={new Date()}
            inputProps={{
              variant: 'text',
              inputClassName: 'p-0 pr-1.5 h-auto',
              prefixClassName: 'hidden',
            }}
            popperPlacement="bottom-end"
            className="w-32"
            selected={startDate}
            onChange={handleChange}
            selectsRange
            startDate={startDate}
            endDate={endDate}
            showYearPicker
          /> */}
        </div>
      }
    >
      <div className="h-[350px] w-full lg:h-[300px] min-[1780px]:h-[22rem] 3xl:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            margin={{ top: 20, bottom: -10, left: 20 }}
            barCategoryGap={20}
            data={data}
            className="[&_.recharts-tooltip-cursor]:fill-opacity-20 dark:[&_.recharts-tooltip-cursor]:fill-opacity-10 [&_.recharts-cartesian-axis-tick-value]:fill-gray-500  rtl:[&_.recharts-cartesian-axis.yAxis]:-translate-x-12"
          >
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="group"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="number" barSize={20} radius={4} fill="#3872FA" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
