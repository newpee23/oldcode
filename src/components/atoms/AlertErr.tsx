import DivTextMesErr from './DivTextMesErr'

type Props = {
  text: string;
}

function AlertErr(prop: Props) {

  const checkStatus = (): string => {
    let status = 'red';
    if (prop.text === 'User registered successfully') {
      status = 'green';
    }
    return status;
  }

  return (
    <div className={`flex items-center flex-col sml:flex-row p-4 mb-4 text-sm ${checkStatus() === 'green' ? 'text-green-800' : 'text-red-800'} rounded-lg ${checkStatus() === 'green' ? 'bg-green-50' : 'bg-red-50'}`} role="alert">
      <div className="items-center hidden sml:flex">
        <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <span className="font-medium mr-2">แจ้งเตือน!</span>
      </div>
      <DivTextMesErr className={`text-center text-sm ${checkStatus() === 'green' ? 'text-green-700' : 'text-red-700'}`} text={prop.text} />
    </div>
  )
}

export default AlertErr