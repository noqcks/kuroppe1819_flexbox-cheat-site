import React, { useEffect, useState } from 'react';
import { constructCss } from '../../../fixtures/functions/constructSourceCode';
import { getFlexboxPropertyInfoById } from '../../../fixtures/functions/dataProvider';
import { Language } from '../../../fixtures/functions/language';
import { createReferenceUrl } from '../../../fixtures/functions/reference';
import { useClipboard } from '../../../fixtures/hooks/useClipboard';
import { FileExtension, FILE_EXTENSION, getSourceCodeOfDisplay, StyledComponent as CodeViewer } from './CodeViewer';
export default {
    title: 'components/pages/index/codeViewer/CodeViewer',
};

export const Normal = () => {
    const id = 'display_flex';
    const language: Language = 'ja';
    const [open, setOpen] = useState(false);
    const [fileExtension, setFileExtension] = useState<FileExtension>(FILE_EXTENSION.CSS);
    const [copied, setCopy] = useClipboard('');
    const [sourceCode, setSourceCode] = useState(constructCss(getFlexboxPropertyInfoById(id).style));

    useEffect(() => {
        setSourceCode(getSourceCodeOfDisplay(id, fileExtension));
    }, [fileExtension]);

    return (
        <CodeViewer
            id={id}
            language={language}
            reference={createReferenceUrl(id, language)}
            open={open}
            fileExtension={fileExtension}
            sourceCode={sourceCode}
            copySuccess={copied}
            onClickToggleViewerButton={() => setOpen(!open)}
            onClickCssViewButton={() => setFileExtension(FILE_EXTENSION.CSS)}
            onClickHtmlViewButton={() => setFileExtension(FILE_EXTENSION.MARKDOWN)}
            onClickCopyButton={setCopy}
        />
    );
};
