FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/vishwamihi/VISHWA-WA-MD /root/VISHWA-WA-MD 
WORKDIR /root/VISHWA-WA-MD/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
