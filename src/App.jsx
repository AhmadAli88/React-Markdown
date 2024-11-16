
import './App.css'
import MarkdownWithCode from './components/Adding Syntax Highlighting'
import BasicMarkdown from './components/Basic'
import CustomMarkdown from './components/Customizing Markdown Components'
import DynamicMarkdown from './components/Loading Markdown Dynamically'
import DynamicMarkdownTwo from './components/Loading Markdown Second'
import HtmlMarkdown from './components/Rendering HTML in Markdown'
import TableMarkdown from './components/Rendering Tables'
import PluginMarkdown from './components/Using Plugins with react-markdown'

function App() {


  return (
   <div>
    <BasicMarkdown/>
    <CustomMarkdown/>
    <MarkdownWithCode/>
    <TableMarkdown/>
    <HtmlMarkdown/>
    <PluginMarkdown/>
    <DynamicMarkdown/>
    <DynamicMarkdownTwo/>
   </div>
  )
}

export default App
