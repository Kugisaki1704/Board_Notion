
import ProjectBoard from './components/ProjectBoard'
import StartingPage from './components/StartingPage'

function App() {
  return (
    <div className="App">
    <div className="flex">
      <div className="flex-1">
      <ProjectBoard listType="Not started"/>
      </div>
      <div className="flex-1">
      <ProjectBoard listType="In Progress"/>
      </div>
      <div className="flex-1">
      <ProjectBoard listType="Completed"/>
      </div>
    </div>
    </div>
  )
}

export default App
