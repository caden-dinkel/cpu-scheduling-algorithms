(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{6760:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6922)}])},6922:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>O});var i=s(7876);let r=e=>{let{label:t,checked:s,onChange:r,id:o}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{style:{background:"var(--foreground)"},type:"checkbox",id:o,checked:s,onChange:e=>r(e.target.checked),className:"form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded peer"}),(0,i.jsx)("label",{htmlFor:o,className:"peer-checked:text-blue-600",children:t})]})},o=e=>{let{value:t,id:s,onValueChange:r,label:o}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("label",{htmlFor:s,style:{color:"var(--foreground)",padding:"5px"},children:o}),(0,i.jsx)("input",{style:{backgroundColor:"var(--foreground)",color:"var(--background)",width:"60px",border:"1px solid var(--background)"},id:s,value:t,type:"number",onChange:e=>{let t=Number(e.target.value);t>=0&&r(t)}})]})},a=e=>{let{label:t,id:s,checked:a,onChange:n,onValueChange:l,value:c}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{id:s,label:t,checked:a,onChange:n}),a&&(0,i.jsx)(o,{id:"RRTQ",label:"Time Quantum - RR",onValueChange:l,value:c})]})},n=e=>{let{label:t,id:s,checked:a,onChange:n,onBoostTimeChange:l,onTimeQuantumChange:c,timeQuantum:d,boostTime:u}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{id:s,label:t,checked:a,onChange:n}),a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{id:"MLFQTQ",label:"Time Quantum - MLFQ",onValueChange:c,value:d}),(0,i.jsx)(o,{id:"MLFQBT",label:"Boost Time - MLFQ",onValueChange:l,value:u})]})]})},l=e=>{let{onClick:t,label:s,disabled:r=!1}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ".concat(r?"opacity-50 cursor-not-allowed":""),style:{color:"var(--background)",backgroundColor:"rgb(154, 155, 96)"},onClick:t,disabled:r,children:s})})},c=e=>{let{selectedValues:t,onSelectionChange:s,onMLFQBoostTimeChange:o,onMLFQTimeQuantumChange:c,onRRTimeQuantumChange:d,timeQuantumMLFQ:u,timeQuantumRR:m,boostTimeMLFQ:h,onSubmit:x}=e;return(0,i.jsxs)("div",{className:"flex flex-col border-2 p-6 rounded-lg w-1/2 max-w-[600px] h-full justify-between items-start gap-6 self-center",children:[(0,i.jsx)("h1",{children:"Select the Algorithms you wish to Run"}),(0,i.jsx)("div",{className:"flex gap-4",children:(0,i.jsx)(r,{id:"FCFS",label:"First-Come-First-Serve",checked:t.has("FCFS"),onChange:e=>s("FCFS",e)},"FCFS")}),(0,i.jsx)(r,{id:"SJF",label:"Shortest-Job-First",checked:t.has("SJF"),onChange:e=>s("SJF",e)},"SJF"),(0,i.jsx)(r,{id:"STCF",label:"Shortest-Time-to-Complete-First",checked:t.has("STCF"),onChange:e=>s("STCF",e)},"STCF"),(0,i.jsx)(a,{id:"RR",label:"Round-Robin",checked:t.has("RR"),onChange:e=>s("RR",e),onValueChange:d,value:m},"RR"),(0,i.jsx)(n,{id:"MLFQ",label:"Multi-Level-Feedback-Queue",checked:t.has("MLFQ"),onChange:e=>s("MLFQ",e),onBoostTimeChange:o,onTimeQuantumChange:c,boostTime:h,timeQuantum:u},"MLFQ"),(0,i.jsx)(l,{onClick:x,label:"Start Animation",disabled:0===t.size})]})};var d=s(4232);let u=(e,t,s,i,r)=>{let o=[];console.log(e);for(let a=1;a<=e;a++){let e=Math.floor(Math.random()*(r-i+1))+i,n=Math.floor(Math.random()*(s-t+1))+t;o.push({id:a,burstTime:e,arrivalTime:n,remainingBurstTime:0,status:"none",lastEnqueueTime:n,priority:0})}return o},m=e=>{let{onGenerate:t}=e,[s,r]=(0,d.useState)(4),[a,n]=(0,d.useState)(7),[c,m]=(0,d.useState)(3),[h,x]=(0,d.useState)(0),[p,g]=(0,d.useState)(3);return(0,i.jsxs)("div",{className:"border-2 p-6 rounded-lg flex flex-col gap-4 w-1/2 max-w-[600px]",style:{color:"var(--foreground)",backgroundColor:"var(--background)"},children:[(0,i.jsx)("h2",{className:"flex gap-4 mx-auto",children:"Random Process Generation Parameters"}),(0,i.jsx)("div",{className:"flex gap-4 mx-auto",children:(0,i.jsx)(o,{value:s,id:"num",label:"Number of Processes",onValueChange:e=>{e>0&&r(e)}})}),(0,i.jsx)("div",{className:"flex gap-4 mx-auto",children:(0,i.jsx)(o,{value:a,id:"max-BT",label:"Maximum Burst Time",onValueChange:e=>{e>=c&&n(e)}})}),(0,i.jsx)("div",{className:"flex gap-4 mx-auto",children:(0,i.jsx)(o,{value:c,id:"min-BT",label:"Minimum Burst Time",onValueChange:e=>{e<=a&&m(e)}})}),(0,i.jsx)("div",{className:"flex gap-4 mx-auto",children:(0,i.jsx)(o,{value:p,id:"max-AT",label:"Maximum Arrival Time",onValueChange:e=>{e>=h&&g(e)}})}),(0,i.jsx)("div",{className:"flex gap-4 mx-auto",children:(0,i.jsx)(o,{value:h,id:"min-AT",label:"Minimum Arrival Time",onValueChange:e=>{e<=p&&x(e)}})}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(l,{id:"proc-gen",label:"Generate Processes",onClick:()=>{t(u(s,h,p,c,a))}})})]})},h=e=>{let{processes:t}=e;return t&&0!==t.length?(0,i.jsx)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,i.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,i.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"PID"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Process Name"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Arrival Time"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Burst Time"})]})}),(0,i.jsx)("tbody",{children:t.map(e=>(0,i.jsxs)("tr",{className:"odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200",children:[(0,i.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.id}),(0,i.jsxs)("td",{className:"px-6 py-4",children:["P",e.id]}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.arrivalTime}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.burstTime})]},e.id))})]})}):(0,i.jsx)("p",{children:"No data to display."})},x=e=>{let{selectedValues:t,onSelectionChange:s,onRRTimeQuantumChange:r,onMLFQTimeQuantumChange:o,onMLFQBoostTimeChange:a,timeQuantumRR:n,timeQuantumMLFQ:l,boostTimeMLFQ:d,onSubmit:u,processes:x,onGenerate:p}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex gap-6 w-full px-6",children:[(0,i.jsx)(m,{onGenerate:p}),(0,i.jsx)(c,{selectedValues:t,onSelectionChange:s,onRRTimeQuantumChange:r,onMLFQTimeQuantumChange:o,onMLFQBoostTimeChange:a,timeQuantumRR:n,timeQuantumMLFQ:l,boostTimeMLFQ:d,onSubmit:u})]}),x.length>0&&(0,i.jsx)(h,{processes:x})]})},p=e=>{let{completedProcesses:t}=e;return t&&0!==t.length?(0,i.jsx)("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:(0,i.jsxs)("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[(0,i.jsx)("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"PID"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Process Name"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Arrival Time"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Start Time"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Completion Time"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Turnaround Time"}),(0,i.jsx)("th",{scope:"col",className:"px-6 py-3",children:"Response Time"})]})}),(0,i.jsx)("tbody",{children:t.map(e=>(0,i.jsxs)("tr",{className:"odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200",children:[(0,i.jsx)("th",{scope:"row",className:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",children:e.id}),(0,i.jsxs)("td",{className:"px-6 py-4",children:["P",e.id]}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.arrivalTime}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.startTime}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.endTime}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.endTime-e.arrivalTime}),(0,i.jsx)("td",{className:"px-6 py-4",children:e.startTime-e.arrivalTime})]},e.id))})]})}):(0,i.jsx)("p",{children:"No processes completed yet."})};var g=s(4504);let T=e=>{let{items:t}=e;return(0,i.jsxs)("div",{className:"color-key-container",children:[(0,i.jsx)("h4",{className:"font-bold",children:"Color Key"}),(0,i.jsx)("div",{className:"color-key-list",style:{display:"flex",flexDirection:"row",gap:"20px"},children:t.map((e,t)=>(0,i.jsxs)("div",{className:"color-key-item",style:{display:"flex",alignItems:"center",marginBottom:"8px"},children:[(0,i.jsx)("div",{style:{width:"20px",height:"20px",backgroundColor:e.color,marginRight:"10px",borderRadius:"3px"}}),(0,i.jsx)("span",{children:e.label})]},t))})]})},b=e=>{let{executingProcess:t,executionPath:s,processes:r,time:o,totalTime:a}=e,n=a/4,l=e=>{let t=[];return r.forEach(s=>{s.id===e&&t.push(s)}),t},c=e=>{switch(l(e)[0].status){case"none":return"#958987";case"waiting":return"#F0A494";case"completed":return"#A0B0AE";case"executing":return"#61D68A"}};return(0,i.jsxs)("div",{style:{position:"relative"},children:[(0,i.jsx)(T,{items:[{label:"Complete",color:"#A0B0AE"},{label:"Executing",color:"#61D68A"},{label:"Waiting",color:"#F0A494"},{label:"Nothing",color:"#958987"}]}),(0,i.jsxs)("div",{style:{width:1e3,position:"relative"},children:[(0,i.jsxs)("div",{style:{position:"relative",width:"100%",height:60,backgroundColor:"#e0e0e0",borderRadius:5,overflow:"hidden",border:"1px solid #ccc"},children:[s.map(e=>{let t=e.startTime/a*1e3,s=(e.endTime-e.startTime)/a*1e3;return(0,i.jsx)("div",{style:{position:"absolute",left:t,width:s,height:"100%",backgroundColor:c(e.processID),color:"black",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(e.processID)},"segment-p".concat(e.processID,"-").concat(e.startTime))}),void 0!==t.at(0)&&(0,i.jsx)(g.P.div,{initial:{width:0},animate:{width:(o-t[0].lastExecutionStartTime)/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:t[0].lastExecutionStartTime/a*1e3,width:(o-t[0].lastExecutionStartTime)/a*1e3,height:"100%",backgroundColor:c(t[0].id),color:"white",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(t[0].id)},"executing-".concat(t[0].id))]}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:5},children:Array.from({length:5},(e,t)=>{let s=Math.round(t*n);return(0,i.jsx)("span",{style:{fontSize:"12px",color:"#555"},children:s},t)})}),(0,i.jsx)(g.P.div,{initial:{left:0},animate:{left:o/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:o/a*1e3,top:0,height:60,width:2,backgroundColor:"red",zIndex:10}})]})]})};var v=s(6060),j=s.n(v),f=s(4312);let y=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"simulation.pdf";if(!e.current)return;let s=await j()(e.current,{scale:2}),i=s.toDataURL("image/png"),r=new f.Ay("p","mm","a4"),o=r.internal.pageSize.getWidth(),a=s.height*o/s.width;r.addImage(i,"PNG",0,0,o,a),r.save(t)};var P=s(8847),S=s.n(P);let C=S()(()=>Promise.all([s.e(697),s.e(885),s.e(598)]).then(s.bind(s,5598)),{loadableGenerated:{webpack:()=>[5598]},ssr:!1,loading:()=>(0,i.jsx)("p",{children:"Loading..."})}),N=e=>{let t=e.time||0,s=[...e.algorithmExecution],i=[...e.completedProcesses],r=[...e.readyQueue],o=[...e.executingProcess],a=[...e.notQueuedProcesses],n=e.remainingTimeQuantum,l=e.remainingBoostTime;for(0===t&&a.sort((e,t)=>e.arrivalTime-t.arrivalTime);void 0!==a.at(0)&&a[0].arrivalTime===t;)a[0].priority=1,a[0].status="waiting",r.push(a[0]),a.shift();if(void 0!==o.at(0)&&o[0].remainingBurstTime===o[0].burstTime){o[0].endTime=t,o[0].status="completed";let e={startTime:o[0].lastExecutionStartTime,endTime:t,processID:o[0].id};s.push(e),i.push(o[0]),o.shift()}return void 0!==r.at(0)&&void 0===o.at(0)&&(r[0].status="executing",r[0].startTime=void 0!==r[0].startTime?r[0].startTime:t,r[0].lastExecutionStartTime=t,o.push(r[0]),r.shift()),void 0!==o.at(0)&&(o[0].remainingBurstTime+=1),i.length!==e.processes.length&&(t+=1),{processes:e.processes,algorithmExecution:s,time:t,completedProcesses:i,readyQueue:r,notQueuedProcesses:a,remainingBoostTime:l,remainingTimeQuantum:n,executingProcess:o}},w=e=>{let{processes:t,totalTime:s}=e,r=structuredClone(t),[o,a]=(0,d.useState)({processes:r,algorithmExecution:[],time:0,completedProcesses:[],readyQueue:[],notQueuedProcesses:[...r],remainingBoostTime:0,remainingTimeQuantum:0,executingProcess:[]}),[n,l]=(0,d.useState)(!1),c=(0,d.useRef)(null);o.notQueuedProcesses.sort((e,t)=>e.arrivalTime-t.arrivalTime);let u=(0,d.useRef)(null);return(0,d.useEffect)(()=>(u.current=setTimeout(()=>{let e=N(o);console.log(o),o.time<e.time?a(e):n||(l(!0),a(e))},1e3),()=>{u.current&&clearInterval(u.current)}),[o,n]),(0,i.jsxs)("div",{ref:c,className:"border-2 p-4 rounded-lg flex flex-col gap-4",style:{position:"relative",color:"var(--foreground)",backgroundColor:"var(--background)"},children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-center",children:"First Come First Served (FCFS)"}),n&&(0,i.jsx)("span",{onClick:()=>y(c,"simulation_FCFS.pdf"),style:{fontSize:"18px",color:"rgb(117, 168, 223)",textDecoration:"underline",cursor:"pointer",transition:"color 0.3s",position:"absolute",right:30},children:"Export Content"}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("strong",{children:"Time:"})," ",o.time]}),(0,i.jsx)("div",{className:"border  p-2 mt-2 rounded",children:(0,i.jsx)(b,{processes:o.processes,executingProcess:o.executingProcess,executionPath:o.algorithmExecution,time:o.time,totalTime:s})}),(0,i.jsx)("div",{className:"border p-2 mt-2 rounded",children:(0,i.jsx)(p,{completedProcesses:o.completedProcesses})}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(C,{completedProcesses:[...o.completedProcesses]})}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("h6",{className:"text-lg font-bold text-left",children:"Process Execution Path"}),o.algorithmExecution.map((e,t)=>(0,i.jsxs)("div",{style:{color:"var(--foreground)"},children:["Start: ",e.startTime," End: ",e.endTime," PID: ",e.processID]},t))]})]})},k=S()(()=>Promise.all([s.e(697),s.e(885),s.e(598)]).then(s.bind(s,5598)),{loadableGenerated:{webpack:()=>[5598]},ssr:!1,loading:()=>(0,i.jsx)("p",{children:"Loading..."})}),E=e=>{let t=e.time||0,s=[...e.algorithmExecution],i=[...e.completedProcesses],r=[...e.readyQueue],o=[...e.executingProcess],a=[...e.notQueuedProcesses],n=e.remainingTimeQuantum,l=e.remainingBoostTime;for(0===t&&a.sort((e,t)=>e.arrivalTime-t.arrivalTime);void 0!==a.at(0)&&a[0].arrivalTime===t;)a[0].priority=1,a[0].status="waiting",r.push(a[0]),a.shift();if(void 0!==r.at(0)&&r.sort((e,t)=>e.burstTime-t.burstTime),void 0!==o.at(0)&&o[0].remainingBurstTime===o[0].burstTime){o[0].endTime=t,o[0].status="completed";let e={startTime:o[0].lastExecutionStartTime,endTime:t,processID:o[0].id};s.push(e),i.push(o[0]),o.shift()}return void 0!==r.at(0)&&void 0===o.at(0)&&(r[0].status="executing",r[0].startTime=r[0].startTime?r[0].startTime:t,r[0].lastExecutionStartTime=t,o.push(r[0]),r.shift()),void 0!==o.at(0)&&(o[0].remainingBurstTime+=1),i.length!==e.processes.length&&(t+=1),{processes:e.processes,algorithmExecution:s,time:t,completedProcesses:i,readyQueue:r,notQueuedProcesses:a,remainingBoostTime:l,remainingTimeQuantum:n,executingProcess:o}},Q=e=>{let{processes:t,totalTime:s}=e,r=structuredClone(t),[o,a]=(0,d.useState)({processes:r,algorithmExecution:[],time:0,completedProcesses:[],readyQueue:[],notQueuedProcesses:[...r],remainingBoostTime:0,remainingTimeQuantum:0,executingProcess:[]}),[n,l]=(0,d.useState)(!1);o.notQueuedProcesses.sort((e,t)=>e.arrivalTime-t.arrivalTime);let c=(0,d.useRef)(null),u=(0,d.useRef)(null);return(0,d.useEffect)(()=>(u.current=setTimeout(()=>{let e=E(o);console.log(o),o.time<e.time?a(e):n||(l(!0),a(e))},1e3),()=>{u.current&&clearInterval(u.current)}),[o,n]),(0,i.jsxs)("div",{ref:c,className:"border-2 p-4 rounded-lg flex flex-col gap-4",style:{position:"relative",color:"var(--foreground)",backgroundColor:"var(--background)"},children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-center",children:"Shortest Job First (SJF)"}),n&&(0,i.jsx)("span",{onClick:()=>y(c,"simulation_SJF.pdf"),style:{fontSize:"18px",color:"rgb(117, 168, 223)",textDecoration:"underline",cursor:"pointer",transition:"color 0.3s",position:"absolute",right:30},children:"Export Content"}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("strong",{children:"Time:"})," ",o.time]}),(0,i.jsx)("div",{className:"border  p-2 mt-2 rounded",children:(0,i.jsx)(b,{processes:o.processes,executingProcess:o.executingProcess,executionPath:o.algorithmExecution,time:o.time,totalTime:s})}),(0,i.jsx)("div",{className:"border p-2 mt-2 rounded",children:(0,i.jsx)(p,{completedProcesses:o.completedProcesses})}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(k,{completedProcesses:[...o.completedProcesses]})}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("h6",{className:"text-lg font-bold text-left",children:"Process Execution Path"}),o.algorithmExecution.map((e,t)=>(0,i.jsxs)("div",{style:{color:"var(--foreground)"},children:["Start: ",e.startTime," End: ",e.endTime," PID: ",e.processID]},t))]})]})},F=S()(()=>Promise.all([s.e(697),s.e(885),s.e(598)]).then(s.bind(s,5598)),{loadableGenerated:{webpack:()=>[5598]},ssr:!1,loading:()=>(0,i.jsx)("p",{children:"Loading..."})}),R=e=>{let t=e.time||0,s=[...e.algorithmExecution],i=[...e.completedProcesses],r=[...e.readyQueue],o=[...e.executingProcess],a=[...e.notQueuedProcesses],n=e.remainingTimeQuantum,l=e.remainingBoostTime;for(0===t&&a.sort((e,t)=>e.arrivalTime-t.arrivalTime);void 0!==a.at(0)&&a[0].arrivalTime===t;)a[0].priority=1,a[0].status="waiting",r.push(a[0]),a.shift();if(void 0!==r.at(0)&&r.sort((e,t)=>e.burstTime-e.remainingBurstTime-(t.burstTime-t.remainingBurstTime)),r.at(0)&&o.at(0)&&r[0].burstTime-r[0].remainingBurstTime<o[0].burstTime-o[0].remainingBurstTime){o[0].lastEnqueueTime=t,o[0].status="waiting";let e={startTime:o[0].lastExecutionStartTime,endTime:t,processID:o[0].id};s.push(e),r.push(o[0]),o.shift()}if(void 0!==o.at(0)&&o[0].remainingBurstTime===o[0].burstTime){o[0].endTime=t,o[0].status="completed";let e={startTime:o[0].lastExecutionStartTime,endTime:t,processID:o[0].id};s.push(e),i.push(o[0]),o.shift()}return void 0!==r.at(0)&&void 0===o.at(0)&&(r[0].status="executing",r[0].startTime=r[0].startTime?r[0].startTime:t,r[0].lastExecutionStartTime=t,o.push(r[0]),r.shift()),void 0!==o.at(0)&&(o[0].remainingBurstTime+=1),i.length!==e.processes.length&&(t+=1),{processes:e.processes,algorithmExecution:s,time:t,completedProcesses:i,readyQueue:r,notQueuedProcesses:a,remainingBoostTime:l,remainingTimeQuantum:n,executingProcess:o}},D=e=>{let{processes:t,totalTime:s}=e,r=structuredClone(t),[o,a]=(0,d.useState)({processes:r,algorithmExecution:[],time:0,completedProcesses:[],readyQueue:[],notQueuedProcesses:[...r],remainingBoostTime:0,remainingTimeQuantum:0,executingProcess:[]}),[n,l]=(0,d.useState)(!1);o.notQueuedProcesses.sort((e,t)=>e.arrivalTime-t.arrivalTime);let c=(0,d.useRef)(null),u=(0,d.useRef)(null);return(0,d.useEffect)(()=>(u.current=setTimeout(()=>{let e=R(o);console.log(o),o.time<e.time?a(e):n||(l(!0),a(e))},1e3),()=>{u.current&&clearInterval(u.current)}),[o,n]),(0,i.jsxs)("div",{ref:c,className:"border-2 p-4 rounded-lg flex flex-col gap-4",style:{position:"relative",color:"var(--foreground)",backgroundColor:"var(--background)"},children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-center",children:"Shortest Time to Complete First (STCF)"}),n&&(0,i.jsx)("span",{onClick:()=>y(c,"simulation.pdf"),style:{fontSize:"18px",color:"rgb(117, 168, 223)",textDecoration:"underline",cursor:"pointer",transition:"color 0.3s",position:"absolute",right:30},children:"Export Content"}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("strong",{children:"Time:"})," ",o.time]}),(0,i.jsx)("div",{className:"border  p-2 mt-2 rounded",children:(0,i.jsx)(b,{processes:o.processes,executingProcess:o.executingProcess,executionPath:o.algorithmExecution,time:o.time,totalTime:s})}),(0,i.jsx)("div",{className:"border p-2 mt-2 rounded",children:(0,i.jsx)(p,{completedProcesses:o.completedProcesses})}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(F,{completedProcesses:[...o.completedProcesses]})}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("h6",{className:"text-lg font-bold text-left",children:"Process Execution Path"}),o.algorithmExecution.map((e,t)=>(0,i.jsxs)("div",{style:{color:"var(--foreground)"},children:["Start: ",e.startTime," End: ",e.endTime," PID: ",e.processID]},t))]})]})},B=e=>{let{executingProcess:t,executionPath:s,processes:r,time:o,totalTime:a}=e,n=a/4,l=e=>{let t=[];return r.forEach(s=>{s.id===e&&t.push(s)}),t},c=e=>{let t=l(e);switch(t[0].status){case"none":return"#958987";case"waiting":switch(t[0].priority){case 1:return"#F0A494";case 2:return"#CD7663";case 3:return"#AD5846"}case"completed":return"#A0B0AE";case"executing":return"#61D68A"}};return(0,i.jsxs)("div",{children:[(0,i.jsx)(T,{items:[{label:"Complete",color:"#A0B0AE"},{label:"Executing",color:"#61D68A"},{label:"Priority: 1 (Highest)",color:"#F0A494"},{label:"Priority: 2",color:"#CD7663"},{label:"Priority: 3 (Lowest)",color:"#AD5846"},{label:"Nothing",color:"#958987"}]}),(0,i.jsx)("h6",{children:"Priority: 1 (Highest Priority)"}),(0,i.jsx)("div",{style:{width:1e3,position:"relative"},children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{position:"relative",width:"100%",height:60,top:0,backgroundColor:"#e0e0e0",borderRadius:5,overflow:"hidden",border:"1px solid #ccc"},children:[s.map(e=>{let t=e.startTime/a*1e3,s=(e.endTime-e.startTime)/a*1e3;if(1===e.priority)return(0,i.jsx)("div",{style:{position:"absolute",left:t,width:s,height:"100%",backgroundColor:c(e.processID),color:"black",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(e.processID)},"segment-p".concat(e.processID,"-").concat(e.startTime))}),void 0!==t.at(0)&&1===t[0].priority&&(0,i.jsx)(g.P.div,{initial:{width:0},animate:{width:(o-t[0].lastExecutionStartTime)/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:t[0].lastExecutionStartTime/a*1e3,width:(o-t[0].lastExecutionStartTime)/a*1e3,height:"100%",backgroundColor:c(t[0].id),color:"white",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(t[0].id)},"executing-".concat(t[0].id))]}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:5},children:Array.from({length:5},(e,t)=>{let s=Math.round(t*n);return(0,i.jsx)("span",{style:{fontSize:"12px",color:"#555"},children:s},t)})}),t.at(0)&&1===t[0].priority&&(0,i.jsx)(g.P.div,{initial:{left:0},animate:{left:o/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:o/a*1e3,top:0,height:60,width:2,backgroundColor:"red",zIndex:10}})]})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{children:"Priority: 2"}),(0,i.jsxs)("div",{style:{width:1e3,position:"relative"},children:[(0,i.jsxs)("div",{style:{position:"relative",width:"100%",height:60,backgroundColor:"#e0e0e0",borderRadius:5,overflow:"hidden",border:"1px solid #ccc"},children:[s.map(e=>{let t=e.startTime/a*1e3,s=(e.endTime-e.startTime)/a*1e3;if(2===e.priority)return(0,i.jsx)("div",{style:{position:"absolute",left:t,width:s,height:"100%",backgroundColor:c(e.processID),color:"black",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(e.processID)},"segment-p".concat(e.processID,"-").concat(e.startTime))}),void 0!==t.at(0)&&2===t[0].priority&&(0,i.jsx)(g.P.div,{initial:{width:0},animate:{width:(o-t[0].lastExecutionStartTime)/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:t[0].lastExecutionStartTime/a*1e3,width:(o-t[0].lastExecutionStartTime)/a*1e3,height:"100%",backgroundColor:c(t[0].id),color:"white",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(t[0].id)},"executing-".concat(t[0].id))]}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:5},children:Array.from({length:5},(e,t)=>{let s=Math.round(t*n);return(0,i.jsx)("span",{style:{fontSize:"12px",color:"#555"},children:s},t)})}),t.at(0)&&2===t[0].priority&&(0,i.jsx)(g.P.div,{initial:{left:0},animate:{left:o/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:o/a*1e3,top:0,height:60,width:2,backgroundColor:"red",zIndex:10}})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h6",{children:"Priority: 3 (Lowest Priority)"}),(0,i.jsxs)("div",{style:{width:1e3,position:"relative"},children:[(0,i.jsxs)("div",{style:{position:"relative",width:"100%",height:60,backgroundColor:"#e0e0e0",borderRadius:5,overflow:"hidden",border:"1px solid #ccc"},children:[s.map(e=>{let t=e.startTime/a*1e3,s=(e.endTime-e.startTime)/a*1e3;if(3===e.priority)return(0,i.jsx)("div",{style:{position:"absolute",left:t,width:s,height:"100%",backgroundColor:c(e.processID),color:"black",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(e.processID)},"segment-p".concat(e.processID,"-").concat(e.startTime))}),void 0!==t.at(0)&&3===t[0].priority&&(0,i.jsx)(g.P.div,{initial:{width:0},animate:{width:(o-t[0].lastExecutionStartTime)/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:t[0].lastExecutionStartTime/a*1e3,width:(o-t[0].lastExecutionStartTime)/a*1e3,height:"100%",backgroundColor:c(t[0].id),color:"white",textAlign:"center",lineHeight:"60px",borderRadius:5,fontSize:14},children:"P".concat(t[0].id)},"executing-".concat(t[0].id))]}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:5},children:Array.from({length:5},(e,t)=>{let s=Math.round(t*n);return(0,i.jsx)("span",{style:{fontSize:"12px",color:"#555"},children:s},t)})}),t.at(0)&&3===t[0].priority&&(0,i.jsx)(g.P.div,{initial:{left:0},animate:{left:o/a*1e3},transition:{duration:1,ease:"easeOut"},style:{position:"absolute",left:o/a*1e3,top:0,height:60,width:2,backgroundColor:"red",zIndex:10}})]})]})]})},I=S()(()=>Promise.all([s.e(697),s.e(885),s.e(598)]).then(s.bind(s,5598)),{loadableGenerated:{webpack:()=>[5598]},ssr:!1,loading:()=>(0,i.jsx)("p",{children:"Loading..."})}),A=(e,t,s)=>{let i=e.time||0,r=[...e.algorithmExecution],o=[...e.completedProcesses],a=[...e.readyQueue],n=[...e.executingProcess],l=[...e.notQueuedProcesses],c=e.remainingTimeQuantum,d=e.remainingBoostTime;for(0===i&&l.sort((e,t)=>e.arrivalTime-t.arrivalTime);void 0!==l.at(0)&&l[0].arrivalTime===i;)l[0].priority=1,l[0].status="waiting",a.push(l[0]),l.shift();if(d===t&&(a.forEach(e=>e.priority=1),d=0),void 0!==n.at(0)&&n[0].remainingBurstTime===n[0].burstTime){n[0].endTime=i,n[0].status="completed";let e={startTime:n[0].lastExecutionStartTime,endTime:i,processID:n[0].id,priority:n[0].priority};r.push(e),o.push(n[0]),n.shift(),c=0}if(a.sort((e,t)=>e.priority-t.priority),c===s){n[0].lastEnqueueTime=i;let e={startTime:n[0].lastExecutionStartTime,endTime:i,processID:n[0].id,priority:n[0].priority};n[0].priority=1===n[0].priority?2:3,n[0].status="waiting",r.push(e),a.push(n[0]),n.shift(),a.sort((e,t)=>e.priority-t.priority),c=0}return void 0!==a.at(0)&&void 0===n.at(0)&&(a[0].status="executing",a[0].startTime=void 0!==a[0].startTime?a[0].startTime:i,a[0].lastExecutionStartTime=i,n.push(a[0]),a.shift()),void 0!==n.at(0)&&(n[0].remainingBurstTime+=1,d+=1,c+=1),o.length!==e.processes.length&&(i+=1),{processes:e.processes,algorithmExecution:r,time:i,completedProcesses:o,readyQueue:a,notQueuedProcesses:l,remainingBoostTime:d,remainingTimeQuantum:c,executingProcess:n}},M=e=>{let{processes:t,timeQuantum:s=4,boostTime:r=10,totalTime:o}=e;console.log(s),console.log(r);let a=structuredClone(t),[n,l]=(0,d.useState)({processes:a,algorithmExecution:[],time:0,completedProcesses:[],readyQueue:[],notQueuedProcesses:[...a],remainingBoostTime:0,remainingTimeQuantum:0,executingProcess:[]}),[c,u]=(0,d.useState)(!1),m=(0,d.useRef)(null),h=(0,d.useRef)(null);return(0,d.useEffect)(()=>(h.current=setTimeout(()=>{let e=A(n,r,s);console.log(n),n.time<e.time?l(e):c||(u(!0),l(e),clearInterval(h.current))},1e3),()=>{h.current&&clearInterval(h.current)}),[n,c,r,s]),(0,i.jsxs)("div",{ref:m,className:"border-2 p-6 rounded-lg flex flex-col gap-4",style:{position:"relative",color:"var(--foreground)",backgroundColor:"var(--background)"},children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-center",children:"Multi Level Feedback Queue (MLFQ)"}),c&&(0,i.jsx)("span",{onClick:()=>y(m,"simulation.pdf"),style:{fontSize:"18px",color:"rgb(117, 168, 223)",textDecoration:"underline",cursor:"pointer",transition:"color 0.3s",position:"absolute",right:30},children:"Export Content"}),(0,i.jsxs)("div",{className:"border p-2 rounded",children:[(0,i.jsx)("strong",{children:"Time:"})," ",n.time]}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(B,{processes:n.processes,executingProcess:n.executingProcess,executionPath:n.algorithmExecution,time:n.time,totalTime:o})}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(p,{completedProcesses:[...n.completedProcesses]})}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(I,{completedProcesses:n.completedProcesses})}),(0,i.jsxs)("div",{className:"border p-2 rounded",children:[(0,i.jsx)("h6",{className:"text-lg font-bold text-left",children:"Process Execution Path"}),n.algorithmExecution.map((e,t)=>(0,i.jsxs)("div",{style:{color:"var(--foreground)"},children:["Start: ",e.startTime," End: ",e.endTime," PID: ",e.processID]},t))]})]})},L=S()(()=>Promise.all([s.e(697),s.e(885),s.e(598)]).then(s.bind(s,5598)),{loadableGenerated:{webpack:()=>[5598]},ssr:!1,loading:()=>(0,i.jsx)("p",{children:"Loading..."})}),z=(e,t)=>{let s=e.time||0,i=[...e.algorithmExecution],r=[...e.completedProcesses],o=[...e.readyQueue],a=[...e.executingProcess],n=[...e.notQueuedProcesses],l=e.remainingTimeQuantum,c=e.remainingBoostTime;for(0===s&&n.sort((e,t)=>e.arrivalTime-t.arrivalTime);void 0!==n.at(0)&&n[0].arrivalTime===s;)n[0].priority=1,n[0].status="waiting",o.push(n[0]),n.shift();if(void 0!==a.at(0)&&a[0].remainingBurstTime===a[0].burstTime){a[0].endTime=s,a[0].status="completed";let e={startTime:a[0].lastExecutionStartTime,endTime:s,processID:a[0].id};i.push(e),r.push(a[0]),a.shift(),l=0}if(o.sort((e,t)=>e.lastEnqueueTime-t.lastEnqueueTime),l===t){a[0].lastEnqueueTime=s;let e={startTime:a[0].lastExecutionStartTime,endTime:s,processID:a[0].id};i.push(e),a[0].status="waiting",o.push(a[0]),a.shift(),o.sort((e,t)=>e.priority-t.priority),l=0}return void 0!==o.at(0)&&void 0===a.at(0)&&(o[0].status="executing",o[0].startTime=o[0].startTime?o[0].startTime:s,o[0].lastExecutionStartTime=s,a.push(o[0]),o.shift()),void 0!==a.at(0)&&(a[0].remainingBurstTime+=1,l+=1),r.length!==e.processes.length&&(s+=1),{processes:e.processes,algorithmExecution:i,time:s,completedProcesses:r,readyQueue:o,notQueuedProcesses:n,remainingBoostTime:c,remainingTimeQuantum:l,executingProcess:a}},_=e=>{let{processes:t,timeQuantum:s=4,totalTime:r}=e,o=structuredClone(t),[a,n]=(0,d.useState)({processes:o,algorithmExecution:[],time:0,completedProcesses:[],readyQueue:[],notQueuedProcesses:[...o],remainingBoostTime:0,remainingTimeQuantum:0,executingProcess:[]}),[l,c]=(0,d.useState)(!1),u=(0,d.useRef)(null);a.notQueuedProcesses.sort((e,t)=>e.arrivalTime-t.arrivalTime);let m=(0,d.useRef)(null);return(0,d.useEffect)(()=>(m.current=setTimeout(()=>{let e=z(a,s);console.log(a),a.time<e.time?n(e):l||(c(!0),n(e))},1e3),()=>{m.current&&clearInterval(m.current)}),[a,l,s]),(0,i.jsxs)("div",{ref:u,className:"border-2 p-4 rounded-lg flex flex-col gap-4",style:{position:"relative",color:"var(--foreground)",backgroundColor:"var(--background)"},children:[(0,i.jsx)("h2",{className:"text-lg font-bold text-center",children:"Round Robin (RR)"}),l&&(0,i.jsx)("span",{onClick:()=>y(u,"simulation.pdf"),style:{fontSize:"18px",color:"rgb(117, 168, 223)",textDecoration:"underline",cursor:"pointer",transition:"color 0.3s",position:"absolute",right:30},children:"Export Content"}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("strong",{children:"Time:"})," ",a.time]}),(0,i.jsx)("div",{className:"border  p-2 mt-2 rounded",children:(0,i.jsx)(b,{processes:a.processes,executingProcess:a.executingProcess,executionPath:a.algorithmExecution,time:a.time,totalTime:r})}),(0,i.jsx)("div",{className:"border p-2 mt-2 rounded",children:(0,i.jsx)(p,{completedProcesses:a.completedProcesses})}),(0,i.jsx)("div",{className:"border p-2 rounded",children:(0,i.jsx)(L,{completedProcesses:[...a.completedProcesses]})}),(0,i.jsxs)("div",{className:"border p-2 mt-2 rounded",children:[(0,i.jsx)("h6",{className:"text-lg font-bold text-left",children:"Process Execution Path"}),a.algorithmExecution.map((e,t)=>(0,i.jsxs)("div",{style:{color:"var(--foreground)"},children:["Start: ",e.startTime," End: ",e.endTime," PID: ",e.processID]},t))]})]})},G=e=>{let{processes:t,algorithmsToRun:s,timeQuantumMLFQ:r,timeQuantumRR:o,boostTime:a}=e,n=t.reduce((e,t)=>e+t.burstTime,0)+Math.min(...t.map(e=>e.arrivalTime));return(0,i.jsxs)("div",{children:[s.has("FCFS")&&(0,i.jsx)(w,{processes:t,totalTime:n}),s.has("SJF")&&(0,i.jsx)(Q,{processes:t,totalTime:n}),s.has("STCF")&&(0,i.jsx)(D,{processes:t,totalTime:n}),s.has("RR")&&(0,i.jsx)(_,{processes:t,timeQuantum:o,totalTime:n}),s.has("MLFQ")&&(0,i.jsx)(M,{processes:t,timeQuantum:r,boostTime:a,totalTime:n})]})},V=e=>{let{label:t,handleGoBack:s}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{style:{display:"flex",marginTop:"10px",position:"relative",backgroundColor:"var(--foreground)",color:"var(--background)"},children:(0,i.jsx)("span",{onClick:s,style:{fontSize:"18px",color:"rgb(31, 72, 116)",textDecoration:"underline",cursor:"pointer",transition:"color 0.3s",position:"absolute",left:3},children:"Go Back"})}),(0,i.jsx)("hr",{className:"h-px bg-gray-200 border-0 dark:bg-gray-700"}),(0,i.jsx)("header",{style:{display:"flex",flexDirection:"column",padding:"20px",alignItems:"center",backgroundColor:"var(--foreground)",borderBottom:"2px solid #ccc",color:"var(--background)"},children:(0,i.jsx)("h1",{style:{fontSize:"36px",fontWeight:"bold",margin:0},children:t})})]})},H=()=>{let[e,t]=(0,d.useState)("initial"),[s,r]=(0,d.useState)(new Set),[o,a]=(0,d.useState)([]),[n,l]=(0,d.useState)(4),[c,u]=(0,d.useState)(4),[m,h]=(0,d.useState)(10);return(0,i.jsxs)("div",{children:[(0,i.jsx)(V,{label:"CPU Scheduling Algorithms Animations",handleGoBack:()=>{switch(e){case"animating":t("initial");case"initial":t("initial")}}}),"initial"===e&&(0,i.jsx)(x,{onSelectionChange:(e,t)=>{r(s=>{let i=new Set(s);return t?i.add(e):i.delete(e),i})},selectedValues:s,timeQuantumRR:n,timeQuantumMLFQ:c,boostTimeMLFQ:m,onRRTimeQuantumChange:l,onMLFQTimeQuantumChange:u,onMLFQBoostTimeChange:h,onSubmit:()=>{0!==o.length&&t("animating")},processes:o,onGenerate:a}),"animating"===e&&(0,i.jsx)(G,{processes:o,algorithmsToRun:s,boostTime:m,timeQuantumMLFQ:c,timeQuantumRR:n})]})},O=function(){return(0,i.jsx)("div",{className:"boxed",children:(0,i.jsx)(H,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[347,869,196,636,593,792],()=>t(6760)),_N_E=e.O()}]);