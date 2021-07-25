FROM golang:1.16

RUN apt update && apt list --upgradable
RUN apt install -y protobuf-compiler
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

RUN cd /tmp && git clone https://github.com/envoyproxy/protoc-gen-validate.git && cd protoc-gen-validate && make build
RUN wget -P /usr/local/bin https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64 

WORKDIR app
COPY entrypoint.sh .
RUN chmod 755 entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]