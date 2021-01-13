# protobuf

# How to generate files locally
```sh
# javascript
protoc menu/v1/*.proto admin/v1/*.proto --js_out=import_style=commonjs:./web/ --proto_path=./
protoc menu/v1/*.proto admin/v1/*.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./web/ --proto_path=./
protoc menu/v1/*.proto admin/v1/*.proto --js_out=import_style=typescript:./web/ --proto_path=./
protoc menu/v1/*.proto admin/v1/*.proto --grpc-web_out=import_style=typescript,mode=grpcwebtext:./web/ --proto_path=./

# golang
protoc -I=./ --go_out=plugins=grpc:./ --go_opt=paths=source_relative --proto_path=./  ./menu/v2/*.proto ./image/v2/*.proto ./country/v2/*.proto
```
