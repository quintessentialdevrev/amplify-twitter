'use client'
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState({
    user:'',
    hashtag:''
  })

    
  const handleSubmit = async () => {
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api'
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev)=>({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <>
        <nav><h1 className="text-3xl p-5">twitter.io</h1></nav>  
        <hr />
        <button className="flex p-2 rounded-full border-2 border-solid border-[#E5E7EB] shadow-lg mx-auto mt-14 mb-6">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="my-auto mx-1">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.24242 0C3.68848 0 0 3.67055 0 8.20235C0 11.8319 2.35939 14.8975 5.63576 15.9843C6.04788 16.0561 6.20242 15.81 6.20242 15.5947C6.20242 15.3999 6.19212 14.754 6.19212 14.067C4.12121 14.4464 3.58545 13.5646 3.42061 13.1033C3.32788 12.8674 2.92606 12.1395 2.57576 11.9447C2.28727 11.7909 1.87515 11.4115 2.56545 11.4013C3.21455 11.391 3.67818 11.9959 3.83273 12.242C4.57455 13.4826 5.75939 13.134 6.23333 12.9187C6.30545 12.3856 6.52182 12.0267 6.75879 11.8216C4.92485 11.6166 3.00848 10.9091 3.00848 7.77173C3.00848 6.87972 3.32788 6.14151 3.85333 5.56735C3.77091 5.36229 3.48242 4.52155 3.93576 3.39372C3.93576 3.39372 4.62606 3.17841 6.20242 4.23446C6.86182 4.04991 7.56243 3.95763 8.26303 3.95763C8.96364 3.95763 9.66424 4.04991 10.3236 4.23446C11.9 3.16816 12.5903 3.39372 12.5903 3.39372C13.0436 4.52155 12.7552 5.36229 12.6727 5.56735C13.1982 6.14151 13.5176 6.86947 13.5176 7.77173C13.5176 10.9194 11.5909 11.6166 9.75697 11.8216C10.0558 12.078 10.3133 12.5701 10.3133 13.3391C10.3133 14.4361 10.303 15.3179 10.303 15.5947C10.303 15.81 10.4576 16.0664 10.8697 15.9843C14.1255 14.8975 16.4848 11.8216 16.4848 8.20235C16.4848 3.67055 12.7964 0 8.24242 0Z" fill="#1B1F23"/>
            </svg>
            <p className="mx-1">Star on GitHub</p>
        </button>
        <h1 className="text-5xl mx-auto text-center leading-snug font-semibold max-w-[47rem]">Generate Sentimental Analysis for anything Twitter in seconds...</h1>
        <p className="text-[#5C6169] text-center py-4">500 tweets analysed so far</p>
        <div className="flex justify-center items-center rounded-lg border-[1px] my-2 border-solid border-[#E5E7EB] w-72 h-9 mx-auto">
            <div className="m-1 rounded-lg bg-[#16181D] w-20 h-7 text-sm text-white flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0706 8.16384C17.6743 8.33438 17.2577 8.45314 16.8311 8.51718C17.0305 8.48298 17.324 8.12395 17.4408 7.97863C17.6183 7.75942 17.7536 7.50918 17.8398 7.24061C17.8398 7.22067 17.8597 7.19217 17.8398 7.17792C17.8297 7.17244 17.8185 7.16956 17.807 7.16956C17.7956 7.16956 17.7843 7.17244 17.7742 7.17792C17.311 7.4288 16.8179 7.62027 16.3068 7.74782C16.2889 7.75326 16.27 7.75375 16.2519 7.74923C16.2338 7.74471 16.2173 7.73536 16.2042 7.72217C16.1644 7.67479 16.1216 7.63006 16.076 7.58825C15.8675 7.40145 15.6309 7.24856 15.375 7.13518C15.0295 6.99344 14.6563 6.93206 14.2836 6.95567C13.922 6.9785 13.569 7.0755 13.2464 7.24061C12.9288 7.41469 12.6497 7.65119 12.4258 7.93588C12.1903 8.22891 12.0202 8.56897 11.9271 8.9332C11.8503 9.27965 11.8416 9.63773 11.9015 9.9875C11.9015 10.0473 11.9015 10.0559 11.8502 10.0473C9.81851 9.74815 8.15157 9.02723 6.78953 7.47997C6.72969 7.41158 6.69834 7.41158 6.6499 7.47997C6.05721 8.3804 6.34501 9.80514 7.08587 10.509C7.1856 10.603 7.28818 10.6942 7.39646 10.7797C7.05678 10.7555 6.7254 10.6635 6.42194 10.509C6.36496 10.4719 6.33361 10.4919 6.33076 10.5602C6.32268 10.6551 6.32268 10.7504 6.33076 10.8452C6.39022 11.2996 6.56928 11.73 6.84965 12.0925C7.13002 12.4549 7.50162 12.7365 7.92647 12.9082C8.03003 12.9526 8.13795 12.986 8.24846 13.0079C7.93399 13.0699 7.61148 13.0795 7.29388 13.0364C7.2255 13.0222 7.19985 13.0592 7.2255 13.1248C7.64437 14.2646 8.55335 14.6122 9.22013 14.806C9.31131 14.8202 9.40249 14.8202 9.50507 14.843C9.50507 14.843 9.50507 14.843 9.48798 14.8601C9.29136 15.2191 8.49636 15.4613 8.13163 15.5867C7.4659 15.8258 6.75611 15.9172 6.05151 15.8546C5.94038 15.8375 5.91474 15.8403 5.88624 15.8546C5.85775 15.8688 5.88624 15.9002 5.91759 15.9287C6.06006 16.0227 6.20254 16.1053 6.35071 16.1851C6.79182 16.4257 7.25816 16.6168 7.74125 16.755C10.2431 17.4446 13.0584 16.9374 14.9362 15.071C16.4122 13.6063 16.9308 11.5861 16.9308 9.56293C16.9308 9.486 17.0248 9.4404 17.079 9.40051C17.4524 9.10955 17.7816 8.76593 18.0563 8.3804C18.1039 8.32293 18.1283 8.24976 18.1247 8.17524V8.17524C18.1247 8.1325 18.1247 8.14105 18.0706 8.16384Z" fill="#D9D9D9"/>
                </svg>
                <p className="mx-1">Tweet</p>
            </div>
            <div className="m-1 rounded-lg w-20 h-7 text-sm text-black flex justify-center items-center">@ Handle</div>
            <div className="m-1 rounded-lg w-20 h-7 text-sm text-black flex justify-center items-center"># Hashtag</div>
        </div>
        <div className="flex flex-col items-center">
            <section className="flex m-2">
                <div className="w-7 h-7 rounded-full text-white bg-black mx-2 flex justify-center items-center">1</div>
                <p className="font-medium justify-center items-center"><span>Copy the tweet </span><span className="text-[#5C6169]">(or write a few words )</span></p>
            </section>
            <input type="text" name="tweet" className="border-2 m-2 border-solid border-[#E5E7EB] w-[39rem] h-24 block" />
            <button className="w-[39rem] h-11 m-2 bg-black text-white rounded-lg">Generate Analysis</button>
        </div>
        <input type="text" name="user" value={data.user} onChange={handleChange} />
        <input type="text" name="hashtag" value={data.hashtag} onChange={handleChange} />
        <button className="" type="submit" onSubmit={handleSubmit}></button>
    </>
  )
}
