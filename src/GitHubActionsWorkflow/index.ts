import React, { Fragment } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface GitHubActionsWorkflowProps {
    workflow: string;
}

const GitHubActionsWorkflow: React.FC<GitHubActionsWorkflowProps> = (props) => {
    const file = props.workflow;
    return (
      <div>
        <CodeBlock 
          title={props.workflow} 
          language="yml" 
          showLineNumbers={true}
        >
          {file}
        </CodeBlock>
    </div>
    );
};

export default GitHubActionsWorkflow;