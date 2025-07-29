import React,{useEffect,useState,useRef} from 'react'
import { Link, useLocation } from 'react-router'
import gsap from 'gsap'
import { RiArrowUpWideLine, RiUser3Fill, RiMapPin2Fill, RiCurrencyLine, RiHome5Line, RiLogoutBoxRLine, RiTimer2Line, RiSpeedUpLine, RiBookletLine } from 'react-icons/ri'
import FinishRide from '../components/FinishRide'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {
     const [finishRidePopupPanel, setFinishRidePopupPanel] = useState(false)
     const finishRidePopupPanelRef = useRef(null)
     const location = useLocation()
     const rideData = location.state?.ride
     useEffect(() => {
     if(finishRidePopupPanel){
      gsap.to(finishRidePopupPanelRef.current, {
        transform: 'translateY(0)'
      })
     }
     else{
      gsap.to(finishRidePopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
     }
  },[finishRidePopupPanel])
  return (
    <div className='h-screen relative flex flex-col justify-end'>
        
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
           <img className='w-16' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAABIFBMVEX///8AAADyZSLx8fFoaGibm5vm5ubS0tL8/PwxMTHf39/4+PjxVgDt7e3IyMhgYGDyYhttbW2+vr5/f3/+9PG1tbXY2NjyYBTxUQCioqJaWlpMTEzxWwAmJiaNjY03Nzd1dXUZGRkRERFFRUWrq6v84dn6zsH96+X72M74uaX5w7PyaSv0eUj1lHLwPwD0hl3zcDn3rJT1jWj2oIP0f1KoRhj1hWahrbDjnIVmcHK7jH0oNDZ3aGLDnpIcIyX2kHfzbUnzdlXyXCzUvrfFhXBXOTKcY05mRDpZLSGCNhLZaz1BJxwfDQOJVkOZaVjfgV90OiGmkYuTd3BhKA3BURvcXR+OSjqGLABPIQpdRj+XQBa5VSuxQgAvEgA9GQeoeG1LbGZNAAARI0lEQVR4nO1ca5vqOHK2ML5jG+zGxja+YTfQ0Cw0cDY7SWYmk2R3M8nJ3jInOTvJbv7/v4gkXySDwYZuuvvJ0++Xpo2wX5VKpVJVyQzzelC7QJJiAECgvuJTXwqaD3jVMBMAYk5+azIXw5i46I/FhQAkKf/WdE5BNIZDQ9MES6xc1vww+yAEUH30oVjz03cA10eQpDCx6MuyB/JPiuABMOm+T/UBJUL6shgBoi5D9HXw6tQaIMocpNUdQuXhJPjJ1PhSQzjAUQ1NHwDJelfqwzo+EjmnwM/WwEP/SJzGZl/KUkK31brI+rBvwPIE5AEkZA4FFYlU4S0tDVyo4aaRibg7qai6mqJhEt6CaB3QZDQFhb4Eu5B6YKJr6B/tUNM1+INw+HoEz0GAC1GdHVRkaCIHqFPAVapfqREcGu74J68PKwHSSS3WfD8VGQMcCTqFcyNS6n7SCqKoKCzLqip/DFVV4VeK0sYysAPgnZuCmh5YTHxsJJH2mNd6PiKcW0bqcIEZdXXd9bwEw0NwXbc7iEwz4By4eFr8WREFwG3goDlCKllHl2UdSv9KyymyKi/LliAIGoRRDw2t+7KaP4KVZw/T2SE14DW6LqIsJzVzlIeWyryO/RVQu3e/7Gz22ye6C1KNVI/BDrgaKatQ+q82dUXALfp237bHvd5mt7gXISETaG1+KtT3UfVA/GqG0wR/82T3Owj9cW/0i/7CilvJjk3S+i9kH7iv5TNbE8D9ajPu5Bhv7wd6qx8GJ9Ubem3Oi/E7DxF6Yt/87arTs6Hw7dFqNuy2MnnaGZPqguS1hK+YAPzd33/7sB6NxtvFnRa1ctX5c1ZJAO1mzkmgZQuZT9nKIctwvYJrVY2ZQNuj70LuDi52TMq1WivF6JxVUl0QXGf0LYMz9UTyM8QUJgjwTxz7vjcIHK0UMu9KE7TDcDmh3UNF56w3KTrAu95hILfBboNadRbqCMqpGUVm2tZBFxpc4SEIX4D9jcA3TY30RWR/IzQNEWsC811tEy8C/1yb85ZQJOC9twiJKN7d3c0g7iHuzrV0cYTkjQJsmCbmCYnO5/MpxGLx8PS0W23Xj5vOaPT99NzvFc0JuhMg3WiLTglxnrFbQHYQTxi73W61Wm236/X+8XGzXELnLcN4PLZtu7deND9CNSIQXklfxOzuMbvpdJ6RK3lBZmvIbL/fbBA36BuPIH5RxShDSbqfe3G9zsNZrSmhOCC42mqKNO7aoVDq+2w48GCgDm/RICwRd+jFteMOpR+A6L1Ep8QnKHy7/3jfqrURhSgKZ9yYVFtMH3tw77J/aLkEsVwCJs47yarcPY3tTm/5dLh5PwM5AM6FWm8WCIKA4xwnHRqGZpH4QS1qnbYK5ttevz9azS/iohigbs9+BrqbQ9f17gCHbtKhJsj8qduonOslnhedVdCHJRT8ZtpmtrKCQNYo7TjW9pJguwAgfx9OMP/kg+72vb7df2pzP95IUzMEYZqrjAFuGFIWgBeghAGrodRffermbjoaj5fbdgovY7JsIAEj4+8MbuYmDxOSLODNGLg1W73ZrtfvrM66BRlERJPnMrWRIxDgW7PerTxNLcJ3VoShgUSWQrfwaHYs9uNOZzuFy9cMLWanbyZaFqLrBCpmDff5Jv6gJad/8xzwJh7moR76fqJDrXfio/Djamn3+/YG4R8Qfvjhh/V6tXtYTO9n1Z4aloFkIbuJ10WGko1AFqkKL7b5osLyliWQKKwmoKirUtFBA01TJSjygZD4APiVSTb/R+jr2J3H/Xa1e3qAlOezWe5RiAeBCbbLKDoStmWYAIdyBAlkwr8sk6gajjnwEkmSwjCUDuANOCMTBottDAd8jr+z4DQDAcNLYEDLYNbWockknIZwjt8vprMIABXdOgvIPUt1REWpDeGwBhwcA7j83XS3m/5TAiQNCv/KDZElMSiKoMxW0CntP8H7QKGHAD/1yrDOeShCarp+It+toEUc7b9FwteuDf2aAQocR8yqhyK5nX+W4KZWcbO1SrvNDlFEk4N5wtHX8d4FOs9eGzt1h0j02myENwD2+tdoGnUzI6DecMG639vZE38DEpm5kj3rQUfDAfIiY99Z/hbpfJQpvtImjXEl5ps8cP/pGex5lABygDYt2P9Lxt7D394wKHX/mMm+/yMYqJTmoMnOVoOIcgE6B6misCKfmCh4pjM9LAr7X/8NREhzutfzYmXBGGKkwxKozqbib4q7POvwGXBQdeGs5WVkjLK042DQ1V2UdiyMbxgmiQc92Mx/TVO4ksgKnKA+NPAhsB7sMVrd/n0CZy2KIj+DvaUNnQBlPlHqEz0RPjJwhpqM2QuBkxqCLM72I9u2Oz+CxILS8mQRs8f5xuEBinwjXPuELJ7O5qnfCMio4iU0FtvlZvs7H0AjP4yfHU0Ti+FXDzPNFuCg3FRBvntYr3//BzAZMpZfWa0uQIp+yMdAiv747Z/+/B2AnUEZjWeSPwPFxYk1MQiDwIUOvoAkGF8rrTiGVkeFDsfkO7RZENDO5KZJWyt3o+RBmHioJxy4VvTI2CfIrAeh5Esh8i6FGIBbxpBFrrJrZiH55PrnuQB78oqgCcg5E3wQ3zYaokIfXCv4atC1Sp6xrvAu9PcKn0B2UKHLjZMPUNxSxGmWYHAodqQ/a1FExRWumWqClpqoRPDSaMjlEOEAA1+SUL3ZxcGXQ+CtwsSXfDRtJy1zd8+EMEBJRd97idCFYsaoLnkSv8jd2j5UfblQqWykqfZeIq8f+MAHPnAKKDf11hxaA6fIsoxgnh17+n731qRqkTGdZ3nLPG253W7X+zybao/Hvd54tLkst/HyLFHCEUkTZxpRvhcRhBQ3OLGKUo5w30ihD1GkUX95QVLpNMQq4OacZEPz7G+RCF2tVus9FF8nz/fmyV2c3sVZ6Yxfjs45jE+lUUUGk6AzsmVWNgdJlueZcpwn32NmUFi9gtuolmMTs2b07Swzk5UUZFwWefL+gU7er9d7nL3HCgd59U6zKkT3TGrNsDsPmaChsJC04EQoKgsoRoRVReXeGuNNUfVQESKR4jvieoTxvjQ280xnioKKXaYryDAtUZnxsZqQYaFH5RA3JN/bX7ZK3eXlI3nZTT4z8qm6zoxcaegyW4es3bHBq5q+qzrZH68utoot+1gayTk9pNmg7r7HBTxZf/dZX7EhyGbc+GDqnyBvd95ugRUrPZySEqXKWKIFtY/VtndEftO2aON1AVcYUhqGR28+nT+MD8lP3yX5Woh5sL3A2G5X6oPANoJu06a92KpN+fDZY1X7xxuaVwN50ISIEf3yM8uca4rh8kzY1Kaoqssb/gdlbPorfPzPyb7xzxc/Co1scL42h8OIze0VZtLUpjiF4OX//1iS7zwhM88WyW7vvOyHTQ+apOikeI5hi7HimObxyc9d8cUgff5UmPkF+oaNiobuefbBifuX8DUmjYt/jBZj5eB4/XnkEXyhHNTPPyHlt0d4vireYcNT0JseFMqkh5LApE3t4yFKMDQgT1wNY3LpS78z7uCdCEtdPXF2qIB3eONDJApDxlFmzKb2odaqhwjT/6Qvduwt9mwEinxDhktJmp7kMeKg+DxQm3vryc3aKGFS081/0Re/7hB5cShR1+LzZTByo3HrohRlDlNk4qb2Osu4TW1CGZO3v3ylr+KyI8en2zWkWTQfNCBgLI98bjaGgzbaCA3LFLpi/S/01QknMiZ9f6+pkoGYk8jhKBD1hpOwHEuO4cu7D+jmXFC2iRi21EaXqweci9Mlcg+q9MEwov9zG4tIShU9qCknZoMyM/6wcp2GQPXQKj+fTjYscue4/xM4hW5zzqaU8UFHnfImCvkMzQm5XmVvFJehOTFKbXRIDUMF7KJfOmY/n9DFqJE7o5RDNaj4QyLRHJyvzeDxpLcHR1DLJdsXGKfk4x9VkGF896sO5VX+WMd90qaUgS8Xq+qippRmw0dnjIrxUcjiVj1oKpY9lNRmg/mzTXmV9pc/H7fwnTYOvlVOsGpflfI+OtXDLkOMYbX8n/QwZBoXtJ8rO5H+gl5bc/JGq90JMZjV6iHCPqB6GDE8MZ6VOaWWPUwYpVzc2pBfTpkjvyhuWbFG1DWtvKKAmBbol5VqzKFamxxVB4T40AOUHT+HT/ReZLzHno1Vmbmn39ZwAOfUM0rIxEhODMqcVI2hXLbn8Ksu2pLf5jGbIbVo6m3Jk8l2EiwZn9givfWra7hVtqd72EC+P94VASdSenvBeRq20WMECumhzxJzklTNPRlD+ayH+YkSfN9+InMzLXTngsJPvtG790Sl7KFPL24Vg5kSvWXOsa+Q79Eny0oRhe3rmKxGD9MU2dLMJOgdIjkqxf+0gaeUwB8c4L9pM9+rhD3KH11QMtxqm0cCCoxMfGVyk4r6SdSe9PDtBU9U0Gn8WEnokHt02xczEHMSxfXsDXQgtuwJMZhmWY1pVfzCgDKYLlt5T8xuRJFfVbNRRIWj1uSJOZnIJ6yPQI2PxhilfoddPUfFmQ9YysP0yzYIv6eilcTY5CArYvuKO2JOJopSEWEJiwqZyI3hE1S0Va+Nn/+H8stGD4fOL1nz278lhTCe0I4ZghRk2wjKSJ43J+gm2NuoDSj85Sdqwo6Oj7ESB7t9yR3ZBHmV/xBKr40YVXpNqUG+gNX18K80+V5N9ph4LO1r4EhcDGubVVkki8N05UWPMic1SDJDLdb0sCL5L1+PCRIVDtubHNqcIBgx9chJvuhRPeTPbLeLM1lK9+irrxT5/k9fa96CUnGw24I2JxgVpy0750N8ZYeR6d5VoReU2KMFsEL+019QUOgQJObSEHWlQUxI8ezKsGNPlfhfGvX5iHxpRI6itH/9QpH/+fPhzgCDL9XzghJlskiKx5cg8HEjqocn45PUM/mDr74S8n0bx85qTlEQB/uCIxZmN4desmejLoEOZ66j5/+4KmPo3Tro9COtSptvfkuRf/zfb1DrGjdMLn6kv+RJGlFknpf+mq1tQn5e94Ked4zi4FDGfrda7XY7lNh9QMf7pvP5/T0+4vfWNOtxX0kGZhlnnGzu9zvL5RLl2x8f9xDr9Xq7Qh3Dhxbn9++hS7NlNZNZBVXtQJUGjOkigc7ycb/e7t4kbT4bnyN/FkWfcHXAaPQG5O/7rcgXoscqldem2FCvoE5BpVpvt1ClXp/8fHNEvl+w7BWlV72e3YG6v0dqn+s9mtBwRuMp3Xhw+mbklz2KJWZqLxHPYnJmDHOO+eHi92JR7zFPYkOKo88QCi4pfGuC/6/BChlkUc4/MXz+QVG07APP5Fewd100tMSiIfb11aYXsN0CWpy5XVzh/XqFAzuRC28vVfMdPD7zqeZ7O7fYwmUuunPLg32nkE4mg64bA0FOgN7VQ7jVHADdNM2IU1IgQY8MhIIggQQkcbYVhw6iB+Kum8LNaNKFn7M9g3PJjuWlwEEZskICVGES84pqgqEYAneAPVL0wjdFBZ5sxL4DAi8LSIsqy4FQURVmMnFYdpi9gBjuNBuy/bdAgPb1QgjgpkDiHC4BVrFL4xgPdFPHhFsaDngB4DxglT+K0B+cS+eywADcS7/em3ALKBFIFTUAMTpZnG1uWODrg8FAN4qN/gAOQqAD2LPCgEZYh1iQCKyiZ+xRaO7V2fM6cLsJevk3hxgCz2QFIA3MKIoExZ8MTDOEMjVBGoemNCm63MUbbAHErt6dTLDGWOGrvYqVIIt4ehp6E48Gt60JyVxoFpB4VA4QsC4YAq+LQusYcIKjiZpvRic4PqShjPFrg0UHtdH7HkRBYxlL03hGxpc0gWU1dNhQ0HhF0FTNsrTCoLMCPlpaNkTXVO11TiZ+4AMf+MAHPvCBD7wF/g8VF8fj3K8HnwAAAABJRU5ErkJggg==" alt="logo.png" />
           <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <RiLogoutBoxRLine className='text-lg font-medium'/>
           </Link>
        </div>
       

        <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10' onClick={()=> setFinishRidePopupPanel(true)}>
             <h5 onClick={()=> {}} className='p-1 text-center w-[95%] absolute top-0 '> <RiArrowUpWideLine className='text-3xl text-gray-200'/> </h5>
             <h4 className='text-xl font-semibold'>4 KM away</h4>
             <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
        </div>
        <div ref={finishRidePopupPanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <FinishRide ride={rideData} setFinishRidePopupPanel={setFinishRidePopupPanel} />
        </div>

         <div className='h-4/5'>
           <LiveTracking/>
        </div>
     </div>
  )
}

export default CaptainRiding