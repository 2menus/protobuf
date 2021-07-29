# protobuf

# How to generate files locally
```sh
# javascript
## messages
protoc menu/v2/menu.proto menu/v2/menu_api.proto image/v2/image.proto country/v2/country.proto --js_out=import_style=commonjs:./web/ --proto_path=./

## grpc
protoc menu/v2/menu_api.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./web/ --proto_path=./

protoc menu/v2/menu.proto menu/v2/menu_api.proto image/v2/image.proto country/v2/country.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./web/ --proto_path=./

# typescript
## messages
protoc menu/v2/menu.proto image/v2/image.proto country/v2/country.proto --js_out=import_style=typescript:./web/ --proto_path=./

## grpc
protoc menu/v2/menu_api.proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/ --proto_path=./

protoc menu/v2/menu.proto image/v2/image.proto country/v2/country.proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/ --proto_path=./

# golang
protoc -I=. --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative --proto_path=./  ./menu/v2/*.proto ./image/v2/*.proto ./country/v2/*.proto
```

```
docker build --build-arg USER_ID=$UID -t protoc:local .
docker run -it -v "$(pwd)":/app/ protoc:local
```