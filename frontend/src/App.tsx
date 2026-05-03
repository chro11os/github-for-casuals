import MenuComponent from "./components/Menu.tsx";
import ScanButton from "./components/ScanButton.tsx";
import HistoryButton from "./components/HistoryButton.tsx";
export default function App() {
    return (
        <div className="min-h flex items-center justify-center p-4">
            <MenuComponent />
            <ScanButton />
            <HistoryButton />
        </div>
    )
}


