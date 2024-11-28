import { GlobalStyles } from "./Styles/Global";
import { ThemeProvider } from 'styled-components';
import { useThemeToggle } from "./Utils/constants";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import { Skillpage } from "./pages/SkillPage/Skillpage";
import { EduPage } from "./pages/Education/EduPage";


function App() {
    const { theme, toggleTheme, isDarkMode } = useThemeToggle();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
            <Home/>
            <ProjectsPage/>
            <Skillpage/>
            <EduPage/>
        </ThemeProvider>
    );
}

export default App;

