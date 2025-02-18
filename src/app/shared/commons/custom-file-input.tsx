import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
  PiArrowLineDownBold,
  PiFile,
  PiFileCsv,
  PiFileDoc,
  PiFilePdf,
  PiFileXls,
  PiFileZip,
  PiTrashBold,
  PiXBold,
} from 'react-icons/pi';
import { ActionIcon, Title, Text, Button } from 'rizzui';
import cn from '@/utils/class-names';
import Upload from '@/components/ui/custom-upload';
import { useModal } from '@/app/shared/modal-views/use-modal';
import SimpleBar from '@/components/ui/simplebar';
import { toast } from 'react-hot-toast';

type AcceptedFiles = 'img' | 'pdf' | 'csv' | 'imgAndPdf' | 'all';

const fileType = {
    'text/csv': <PiFileCsv className="h-5 w-5" />,
    'text/plain': <PiFile className="h-5 w-5" />,
    'application/pdf': <PiFilePdf className="h-5 w-5" />,
    'application/xml': <PiFileXls className="h-5 w-5" />,
    'application/zip': <PiFileZip className="h-5 w-5" />,
    'application/gzip': <PiFileZip className="h-5 w-5" />,
    'application/msword': <PiFileDoc className="h-5 w-5" />,
  } as { [key: string]: React.ReactElement };
  
  export const FileInput = ({
    label,
    btnLabel = 'Upload',
    multiple = true,
    accept = 'img',
    className,
  }: {
    className?: string;
    label?: React.ReactNode;
    multiple?: boolean;
    btnLabel?: string;
    accept?: AcceptedFiles;
  }) => {
    const { closeModal } = useModal();
    const [files, setFiles] = useState<Array<File>>([]);
    const imageRef = useRef<HTMLInputElement>(null);
  
    function handleFileDrop(event: React.ChangeEvent<HTMLInputElement>) {
      const uploadedFiles = (event.target as HTMLInputElement).files;
      const newFiles = Object.entries(uploadedFiles as object)
        .map((file) => {
          if (file[1]) return file[1];
        })
        .filter((file) => file !== undefined);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  
    function handleImageDelete(index: number) {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
      (imageRef.current as HTMLInputElement).value = '';
    }
  
    function handleFileUpload() {
      if (files.length) {
        console.log('uploaded files:', files);

        // added the below line
        setFiles([])
        toast.success(<Text as="b">File successfully added</Text>);
  
        setTimeout(() => {
          closeModal();
        }, 200);
      } else {
        toast.error(<Text as="b">Please drop your file</Text>);
      }
    }
  
    return (
      <div className={className}>
        <Upload
          label={label}
          ref={imageRef}
          accept={accept}
          multiple={multiple}
          onChange={(event) => handleFileDrop(event)}
          className="justify-between border-solid bg-gray-0 dark:bg-transparent"
        />
  
        {files.length > 1 ? (
          <Text className="mb-2 text-gray-500">{files.length} files</Text>
        ) : null}
  
        {files.length > 0 && (
          <SimpleBar className="max-h-[280px]">
            <div className="grid grid-cols-1 gap-4">
              {files?.map((file: File, index: number) => (
                <div
                  className="flex min-h-[58px] w-full items-center rounded-xl border border-muted px-3 dark:border-gray-300"
                  key={file.name}
                >
                  <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-muted bg-gray-50 object-cover px-2 py-1.5 dark:bg-transparent">
                    {file.type.includes('image') ? (
                      <Image
                        src={URL.createObjectURL(file)}
                        fill
                        className=" object-contain"
                        priority
                        alt={file.name}
                        sizes="(max-width: 768px) 100vw"
                      />
                    ) : (
                      <>{fileType[file.type]}</>
                    )}
                  </div>
                  <div className="truncate px-2.5">{file.name}</div>
                  <ActionIcon
                    onClick={() => handleImageDelete(index)}
                    size="sm"
                    variant="flat"
                    color="danger"
                    className="ms-auto flex-shrink-0 p-0 dark:bg-red-dark/20"
                  >
                    <PiTrashBold className="w-6" />
                  </ActionIcon>
                </div>
              ))}
            </div>
          </SimpleBar>
        )}
        <div className="mt-4 flex justify-end gap-3">
          <Button
            variant="outline"
            className={cn(!files.length && 'hidden', 'w-full')}
            onClick={() => setFiles([])}
          >
            Reset
          </Button>
          <Button className={cn(!files.length && 'hidden', 'w-full')} onClick={() => handleFileUpload()}>
            <PiArrowLineDownBold className="me-1.5 h-[17px] w-[17px]" />
            {btnLabel}
          </Button>
        </div>
      </div>
    );
  };
  