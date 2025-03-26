import "prismjs/themes/prism-tomorrow.css"
import Prism from 'prismjs'
import Editor from 'react-simple-code-editor'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState('')

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  // ... existing code ...
} 