import React from 'react';
import CodeBlock from '@theme/CodeBlock';

interface WorkflowCodeBlockProps {
    workflow: string;
}

const WorkflowCodeBlock: React.FC<WorkflowCodeBlockProps> = (props) => {
    const wf = require('raw-loader!@site/.github/workflows/' + props.workflow).default;
    const workflowLink = `https://github.com/mikael-andersson91/rpa-devops/blob/main/.github/workflows/${props.workflow}`;
    return (
        <details>
        <a href={workflowLink} >Click to view the workflow file on GitHub</a>
        <summary>Click to view the workflow file</summary>
            <CodeBlock 
                language="yml"
                title={props.workflow}
                showLineNumbers={true}
            >
                {wf}
            </CodeBlock>
        </details>
    );
};

export default WorkflowCodeBlock;