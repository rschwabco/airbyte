"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1518],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70234:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],l={},s="Airbyte Specification",c={unversionedId:"understanding-airbyte/airbyte-specification",id:"understanding-airbyte/airbyte-specification",title:"Airbyte Specification",description:"Key Takeaways",source:"@site/../docs/understanding-airbyte/airbyte-specification.md",sourceDirName:"understanding-airbyte",slug:"/understanding-airbyte/airbyte-specification",permalink:"/airbyte/understanding-airbyte/airbyte-specification",editUrl:"https://github.com/airbytehq/airbyte/blob/gitbook/v1/README.md/../docs/understanding-airbyte/airbyte-specification.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"AirbyteCatalog Reference",permalink:"/airbyte/understanding-airbyte/catalog"},next:{title:"Basic Normalization",permalink:"/airbyte/understanding-airbyte/basic-normalization"}},p={},d=[{value:"Key Takeaways",id:"key-takeaways",level:2},{value:"Contents:",id:"contents",level:4},{value:"General",id:"general",level:2},{value:"Definitions",id:"definitions",level:3},{value:"Primitives",id:"primitives",level:2},{value:"Source",id:"source",level:3},{value:"Spec",id:"spec",level:4},{value:"Check",id:"check",level:4},{value:"Discover",id:"discover",level:4},{value:"Read",id:"read",level:4},{value:"Destination",id:"destination",level:3},{value:"Write",id:"write",level:4},{value:"The Airbyte Protocol",id:"the-airbyte-protocol",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2}],m={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"airbyte-specification"},"Airbyte Specification"),(0,r.kt)("h2",{id:"key-takeaways"},"Key Takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The specification is Docker-based; this allows a developer to write a connector in any language they want. All they have to do is put that code in a Docker container that adheres to the interface and protocol described below.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We currently provide templates to make this even easier for those who prefer to work in python or java. These templates allow the developer to skip any Docker setup so that they can just implement code against well-defined interfaces in their language of choice."))),(0,r.kt)("li",{parentName:"ul"},"The specification is designed to work as a CLI. The Airbyte app is built on top of this CLI."),(0,r.kt)("li",{parentName:"ul"},"The specification defines a standard interface for implementing data integrations: Sources and Destinations."),(0,r.kt)("li",{parentName:"ul"},"The specification provides a structured stdout / stdin message passing standard for data transport."),(0,r.kt)("li",{parentName:"ul"},"While this specification works with Airbyte, it is an independent standard.")),(0,r.kt)("h4",{id:"contents"},"Contents:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/airbyte/understanding-airbyte/airbyte-specification#general"},"General information about the specification")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/airbyte/understanding-airbyte/airbyte-specification#primitives"},"Connector primitives")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/airbyte/understanding-airbyte/airbyte-specification#the-airbyte-protocol"},"Details of the protocol to pass information between connectors"))),(0,r.kt)("p",null,"This document is focused on the interfaces and primitives around connectors. You can better understand how that fits into the bigger picture by checking out the ",(0,r.kt)("a",{parentName:"p",href:"/airbyte/understanding-airbyte/high-level-view"},"High-level View"),"."),(0,r.kt)("h2",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All structs described in this article are defined using JsonSchema."),(0,r.kt)("li",{parentName:"ul"},"Airbyte uses JSON representations of these structs for all inter-process communication.")),(0,r.kt)("h3",{id:"definitions"},"Definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Airbyte Worker")," - This is a core piece of the Airbyte stack that is responsible for 1",")"," initializing a Source and a Destinations and 2",")"," passing data from Source to Destination.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Someone implementing a connector need not ever touch this code, but in this article we mention it to contextualize how data is flowing through Airbyte."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connector")," - A connector is code that allows Airbyte to interact with a specific underlying data source ","(","e.g. Postgres",")",". In Airbyte, an integration is either a Source or a Destination."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source")," - A connector that ",(0,r.kt)("em",{parentName:"li"},"pulls")," data from an underlying data source. ","(","e.g. A Postgres Source reads data from a Postgres database. A Stripe Source reads data from the Stripe API",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination")," - A connector that ",(0,r.kt)("em",{parentName:"li"},"pushes")," data to an underlying data source. ","(","e.g. A Postgres Destination writes data to a Postgres database",")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AirbyteSpecification")," - the specification that describes how to implement connectors using a standard interface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"AirbyteProtocol")," - the protocol used for inter-process communication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integration Commands")," - the commands that an integration container implements ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"spec"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"check"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"discover"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"read"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"write"),")",". We describe these commands in more detail below."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sync")," - the act of moving data from a Source to a Destination.")),(0,r.kt)("h2",{id:"primitives"},"Primitives"),(0,r.kt)("h3",{id:"source"},"Source"),(0,r.kt)("p",null,"A source is implemented as a Docker container. The container must adhere to the interface described below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How the container will be called:")),(0,r.kt)("p",null,"The first argument passed to the image must be the command ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"check"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"discover"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"read"),")",". Additional arguments can be passed after the command. Note: The system running the container will handle mounting the appropriate paths so that the config files are available to the container. This code snippet does not include that logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run --rm -i <source-image-name> spec\ndocker run --rm -i <source-image-name> check --config <config-file-path>\ndocker run --rm -i <source-image-name> discover --config <config-file-path>\ndocker run --rm -i <source-image-name> read --config <config-file-path> --catalog <catalog-file-path> [--state <state-file-path>] > message_stream.json\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," command will emit a stream records to stdout."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface Pseudocode:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"spec() -> ConnectorSpecification\ncheck(Config) -> AirbyteConnectionStatus\ndiscover(Config) -> AirbyteCatalog\nread(Config, ConfiguredAirbyteCatalog, State) -> Stream<AirbyteMessage>\n")),(0,r.kt)("h4",{id:"spec"},"Spec"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"none."))),(0,r.kt)("li",{parentName:"ul"},"Output:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"spec")," - a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/922bfd08a9182443599b78dbb273d70cb9f63d30/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L256-L306"},"ConnectorSpecification")," wrapped in an ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," of type ",(0,r.kt)("inlineCode",{parentName:"li"},"spec"),"."))),(0,r.kt)("li",{parentName:"ul"},"The objective of the spec command is to pull information about how to use a source. The ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification")," contains this information."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"connectionSpecification")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification")," must be valid JsonSchema. It describes what inputs are needed in order for the source to interact with the underlying data source.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. If using a Postgres source, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification")," would specify that a ",(0,r.kt)("inlineCode",{parentName:"li"},"hostname"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"port"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," are required in order for the connector to function."),(0,r.kt)("li",{parentName:"ul"},"The UI reads the JsonSchema in this field in order to render the input fields for a user to fill in."),(0,r.kt)("li",{parentName:"ul"},"This JsonSchema is also used to validate that the provided inputs are valid. e.g. If ",(0,r.kt)("inlineCode",{parentName:"li"},"port")," is one of the fields and the JsonSchema in the ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorSpecification"),' specifies that this field should be a number, if a user inputs "airbyte", they will receive an error. Airbyte adheres to JsonSchema validation rules.')))),(0,r.kt)("h4",{id:"check"},"Check"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," - A configuration JSON object that has been validated using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification"),"."))),(0,r.kt)("li",{parentName:"ul"},"Output:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"connectionStatus")," - an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/922bfd08a9182443599b78dbb273d70cb9f63d30/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L99-L112"},"AirbyteConnectionStatus")," wrapped in an ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," of type ",(0,r.kt)("inlineCode",{parentName:"li"},"connection_status"),"."))),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"check")," command attempts to connect to the underlying data source in order to verify that the provided credentials are usable.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. If given the credentials, it can connect to the Postgres database, it will return a success response. If it fails ","(","perhaps the password is incorrect",")",", it will return a failed response and ","(","when possible",")"," a helpful error message.")))),(0,r.kt)("h4",{id:"discover"},"Discover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Input:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," - A configuration JSON object that has been validated using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Output:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," - an ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/922bfd08a9182443599b78dbb273d70cb9f63d30/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L113-L123"},"AirbyteCatalog")," wrapped in an ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," of type ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This command detects the ",(0,r.kt)("em",{parentName:"p"},"structure")," of the data in the data source.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," describes the structure of data in a data source. It has a single field called ",(0,r.kt)("inlineCode",{parentName:"p"},"streams")," that contains a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStream"),"s. Each of these contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," field. The ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," field accepts any valid JsonSchema and describes the structure of a stream. This data model is intentionally flexible. That can make it a little hard at first to mentally map onto your own data, so we provide some examples below:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If we are using a data source that is a traditional relational database, each table in that database would map to an ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteStream"),". Each column in the table would be a key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"e.g. If we have a table called ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," which had the columns ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," ","(","the age column is optional",")"," the ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," would look like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'  {\n    "streams": [\n      {\n        "name": "users",\n        "schema": {\n          "type": "object",\n          "required": ["name"],\n          "properties": {\n            "name": {\n              "type": "string"\n            },\n            "age": {\n              "type": "number"\n            }\n          }\n        }\n      }\n    ]\n  }\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If we are using a data source that wraps an API with multiple different resources ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"api/customers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"api/products"),")"," each route would correspond to a stream. The JSON object returned by each route would be described in the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_schema")," field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"e.g. In the case where the API has two endpoints ",(0,r.kt)("inlineCode",{parentName:"p"},"api/customers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"api/products")," and each returns a list of JSON objects, the ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog")," might look like this. ","(",'Note: using the JSON schema standard for defining a stream allows us to describe nested objects. We are not constrained to a classic "table/columns" structure',")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'  {\n    "streams": [\n      {\n        "name": "customers",\n        "schema": {\n          "type": "object",\n          "required": ["name"],\n          "properties": {\n            "name": {\n              "type": "string"\n            }\n          }\n        }\n      },\n      {\n        "name": "products",\n        "schema": {\n          "type": "object",\n          "required": ["name", "features"],\n          "properties": {\n            "name": {\n              "type": "string"\n            },\n            "features": {\n              "type": "array",\n              "items": {\n                "type": "object",\n                "required": ["name", "productId"],\n                "properties": {\n                  "name": { "type": "string" },\n                  "productId": { "type": "number" }\n                }\n              }\n            }\n          }\n        }\n      }\n    ]\n  }\n')))))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Stream and field names can be any UTF8 string. Destinations are responsible for cleaning these names to make them valid table and column names in their respective data stores."),(0,r.kt)("h4",{id:"read"},"Read"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," - A configuration JSON object that has been validated using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," - A ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfiguredAirbyteCatalog"),". This ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," should be constructed from the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," returned by the ",(0,r.kt)("inlineCode",{parentName:"li"},"discover")," command. To convert an ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteStream")," to a ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfiguredAirbyteStream")," copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteStream")," into the stream field of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfiguredAirbyteStream"),". Any additional configurations can be specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfiguredAirbyteStream"),". More details on how this is configured in the ",(0,r.kt)("a",{parentName:"li",href:"/airbyte/understanding-airbyte/catalog"},"catalog documentation"),". This catalog will be used in the ",(0,r.kt)("inlineCode",{parentName:"li"},"read")," command to both select what data is transferred and how it is replicated."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"state")," - A JSON object. This object is only ever written or read by the source, so it is a JSON blob with whatever information is necessary to keep track of how much of the data source has already been read. This is important whenever we need to replicate data with Incremental sync modes such as ",(0,r.kt)("a",{parentName:"li",href:"/airbyte/understanding-airbyte/connections/incremental-append"},"Incremental Append")," or ",(0,r.kt)("a",{parentName:"li",href:"/airbyte/understanding-airbyte/connections/incremental-deduped-history"},"Incremental Deduped History"),". Note that this is not currently based on the state of data existing on the destination side."))),(0,r.kt)("li",{parentName:"ul"},"Output:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"message stream")," - A stream of ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteRecordMessage"),"s and ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteStateMessage"),"s piped to stdout."))),(0,r.kt)("li",{parentName:"ul"},"This command reads data from the underlying data source and converts it into ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteRecordMessage"),"."),(0,r.kt)("li",{parentName:"ul"},"Outputting ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteStateMessages")," is optional. It can be used to track how much of the data source has been synced."),(0,r.kt)("li",{parentName:"ul"},"The connector ideally will only pull the data described in the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," argument. It is permissible for the connector, however, to ignore the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," and pull data from any stream it can find. If it follows this second behavior, the extra data will be pruned in the worker. We prefer the former behavior because it reduces the amount of data that is transferred and allows control over not sending sensitive data. There are some sources for which this is simply not possible.")),(0,r.kt)("h3",{id:"destination"},"Destination"),(0,r.kt)("p",null,"A destination is implemented as a Docker container. The container must adhere to the following interface."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How the container will be called:")),(0,r.kt)("p",null,"The first argument passed to the image must be the command ","(","e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"check"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"write"),")",". Additional arguments can be passed after the command. Note: The system running the container will handle mounting the appropriate paths so that the config files are available to the container. This code snippet does not include that logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"docker run --rm -i <destination-image-name> spec\ndocker run --rm -i <destination-image-name> check --config <config-file-path>\ncat <&0 | docker run --rm -i <destination-image-name> write --config <config-file-path> --catalog <catalog-file-path>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," command will consume ",(0,r.kt)("inlineCode",{parentName:"p"},"AirbyteMessage"),"s from stdin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface Pseudocode:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"spec() -> ConnectorSpecification\ncheck(Config) -> AirbyteConnectionStatus\nwrite(Config, AirbyteCatalog, Stream<AirbyteMessage>(stdin)) -> void\n")),(0,r.kt)("p",null,"For the sake of brevity, we will not re-describe ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"check"),". They are exactly the same as those commands described for the Source."),(0,r.kt)("h4",{id:"write"},"Write"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"config")," - A configuration JSON object that has been validated using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ConnectorSpecification"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," - An ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteCatalog"),". This ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," should be a subset of the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," returned by the ",(0,r.kt)("inlineCode",{parentName:"li"},"discover")," command. Any ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteRecordMessages"),"s that the destination receives that do ",(0,r.kt)("em",{parentName:"li"},"not")," match the structure described in the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," will fail."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"message stream")," - ","(","this stream is consumed on stdin--it is not passed as an arg",")",". It will receive a stream of JSON-serialized ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMesssage"),"."))),(0,r.kt)("li",{parentName:"ul"},"Output:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s of type ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteStateMessage"),". The destination connector should only output state messages if they were previously received as input on stdin. Outputting a state message indicates that all records which came before it have been successfully written to the destination."))),(0,r.kt)("li",{parentName:"ul"},"The destination should read in the ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessages")," and write any that are of type ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteRecordMessage")," to the underlying data store."),(0,r.kt)("li",{parentName:"ul"},"The destination should fail if any of the messages it receives do not match the structure described in the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog"),".")),(0,r.kt)("h2",{id:"the-airbyte-protocol"},"The Airbyte Protocol"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All messages passed to and from connectors must be wrapped in an ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," envelope and serialized as JSON. The JsonSchema specification for these messages can be found ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/blob/922bfd08a9182443599b78dbb273d70cb9f63d30/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L13-L45"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"Even if a record is wrapped in an ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," it will only be processed if it appropriate for the given command. e.g. If a source ",(0,r.kt)("inlineCode",{parentName:"li"},"read")," action includes AirbyteMessages in its stream of type Catalog for instance, these messages will be ignored as the ",(0,r.kt)("inlineCode",{parentName:"li"},"read")," interface only expects ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteRecordMessage"),"s and ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteStateMessage"),"s. The appropriate ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," types have been described in each command above."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ALL")," actions are allowed to return ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteLogMessage"),"s on stdout. For brevity, we have not mentioned these log messages in the description of each action, but they are always allowed. An ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteLogMessage")," wraps any useful logging that the connector wants to provide. These logs will be written to Airbyte's log files and output to the console."),(0,r.kt)("li",{parentName:"ul"},"I/O:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connectors receive arguments on the command line via JSON files. ",(0,r.kt)("inlineCode",{parentName:"li"},"e.g. --catalog catalog.json")),(0,r.kt)("li",{parentName:"ul"},"They read ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s from stdin. The destination ",(0,r.kt)("inlineCode",{parentName:"li"},"write")," action is the only command that consumes ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s."),(0,r.kt)("li",{parentName:"ul"},"They emit ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage"),"s on stdout. All commands that output messages use this approach ","(","even ",(0,r.kt)("inlineCode",{parentName:"li"},"write")," emits ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteLogMessage"),"s",")",". e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"discover")," outputs the ",(0,r.kt)("inlineCode",{parentName:"li"},"catalog")," wrapped in an AirbyteMessage on stdout."))),(0,r.kt)("li",{parentName:"ul"},"Messages not wrapped in the ",(0,r.kt)("inlineCode",{parentName:"li"},"AirbyteMessage")," will be ignored."),(0,r.kt)("li",{parentName:"ul"},"Each message must be on its own line. Multiple messages ",(0,r.kt)("em",{parentName:"li"},"cannot")," be sent on the same line."),(0,r.kt)("li",{parentName:"ul"},"Each message must but serialize to a JSON object that is exactly 1 line. The JSON objects cannot be serialized across multiple lines.")),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"We'd like to note that we were initially inspired by Singer.io's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/singer-io/getting-started/blob/master/docs/SPEC.md#singer-specification"},"specification")," and would like to acknowledge that some of their design choices helped us bootstrap our project. We've since made a lot of modernizations to our protocol and specification, but don't want to forget the tools that helped us get started."))}u.isMDXComponent=!0}}]);