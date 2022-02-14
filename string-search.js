const products = [
    'Dell hardcore i29 200GB laptop',
    'iphoe 1TB camera flashlight phone',
    'yellow laptop with black camera',
    '1Z59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'Dell purple color phone with Laptop'
];

const searching = 'camera';

// indexOf

const output = [];
for(const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        // output.push(product);
    }
}

// console.log(output); 
for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        output.push(product);

    }
}

console.log(output);

// starts with

for(const product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())){
        output.push(product);
    }
}

// console.log(output);

for(const product of products){
    if(product.toLocaleLowerCase().endsWith()(searching.toLocaleLowerCase())){
        output.push(product);
    }
}

console.log(output);