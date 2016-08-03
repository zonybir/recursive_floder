#get directory structure

you can use input stream redirect to get a json than  your directory structure

use like :  node fs <'you directory path' >>json.js

eg :

windows ：  node fs F://360 >>360.js

you will get 360.js file

>
>{ '360Safe':
>
>   {	'360AppLoader.exe': '360AppLoader.exe',

>   			.
>   			.
>   			.
>
>   		ipc: { '360AntiHacker.dll': '360AntiHacker.dll',
>
>      			.
>      			.
>      			.
>
>      	},
>
>      	'wimgapi.dll': 'wimgapi.dll',
>
>      			.
>      			.
>      			.
>
>        'WinDlp.dll': 'WinDlp.dll'
>
>    }
>
>}


linux:  node fs /var/www >>var.www.js

you will get var.www.js

>
>{
>
>	'www':{
>
>		'html':{
>
>			'zonybir.js':'zonybir.js',
>
>				.
>				.
>				.
>			'zony':{
>				'zony':'zony',
>				'floruit.jsx':'floruit.jsx'
>			}
>		},
>		'component.jsx':'conponent.jsx',
>				.
>				.
>				.
>	}
>}
