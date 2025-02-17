import './App.css'
import {useReportBlocks} from "./hooks/useReportBlocks.tsx";
import {ReportRenderer} from "./components/ReportRenderer.tsx";

function App() {
    const blocks = useReportBlocks();
    return (
        <ReportRenderer />
    )
}

export default App
