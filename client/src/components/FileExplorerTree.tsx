import { useTreeMemo } from "../hooks/useTreeMemo";
import { 
    getChildrenNodesAsArray,    
    FileTreeNode,
} from "../utils/fileTree";

import FileExplorerNode from "./FileExplorerNode";

interface FileExplorerTreeProps {
    treePath: string
}

function FileExplorerTree(props: FileExplorerTreeProps) {
    const childNodes = useTreeMemo(props.treePath || "")
        .filter((node: FileTreeNode) => node && node.filePath.length > 0);
    
    return (
        <ul key={[props.treePath, "-", "tree", "-", "list"].join()}>
            {
                childNodes.map((node: FileTreeNode) => 
                    <FileExplorerNode key={[node.filePath, "-", "123"].join()}
                        nodeName={node.baseName} nodePath={node.filePath} />
                )
            }
        </ul>
    );
}

export default FileExplorerTree