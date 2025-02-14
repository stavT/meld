import React from 'react';
import { ThemeIcon } from '../../../../../../../base/common/themables.js';

interface ContextSectionProps {
    onFilesSelected: (files: FileList) => void;
    selectedFiles: File[];
    onRemoveFile: (index: number) => void;
}

interface FileInputProps {
    onFilesSelected: (files: FileList) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onFilesSelected }) => {
    return (
        <label className="flex items-center justify-center p-2 cursor-pointer
                    border border-dashed border-void-border-2 rounded
                    hover:border-void-border-1 transition-colors min-h-[40px]">
            <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => e.target.files && onFilesSelected(e.target.files)}
            />
            <span className="text-sm text-void-fg-2">
                Drop files here or click to upload
            </span>
        </label>
    );
};

export const ContextSection: React.FC<ContextSectionProps> = ({
    onFilesSelected,
    selectedFiles,
    onRemoveFile
}) => {
    return (
        <div className="right-0 left-0 m-2 flex flex-col gap-2 p-2 relative input text-left
                    bg-vscode-input-bg rounded-md min-h-[81px]
                    border border-void-border-3 focus-within:border-void-border-1 hover:border-void-border-1">
            <h2 className="text-sm font-medium text-void-fg-1">Additional Context</h2>

            {/* File list */}
            <div className="flex flex-col gap-1">
                {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-1 text-sm bg-void-bg-2 rounded">
                        <span className="truncate">{file.name}</span>
                        <button onClick={() => onRemoveFile(index)} className="text-void-fg-3 hover:text-void-fg-1">
                            <span className={ThemeIcon.asClassName('close')} />
                        </button>
                    </div>
                ))}
            </div>

            {/* File input */}
            <FileInput onFilesSelected={onFilesSelected} />
        </div>
    );
};
